import { compareSync } from 'bcryptjs';
import { createToken } from '../Utils/jwtFunctions';
import { ILogin } from '../interfaces/userInterface';
import User from '../models/user';

export default class UserService  {
      
    public static async login (data: ILogin)  {
        const { email, password } = data;
      
        const user = await User.findOne({ where: { email } });
      
        if (!user) return false;
      
        const passwordCheck = compareSync(password, user.password);
      
        if (!passwordCheck) return false;
      
        const token = await createToken({ email, username: user.username });
      
        const userFiltered = {
          user: {
            id: user.id,
            username: user.username,
            email,
          },
          token };
      
        return userFiltered;
      };
  } 



