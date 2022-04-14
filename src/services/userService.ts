import { compareSync } from 'bcryptjs';
import userSchema  from '../Schema/userSchema';
import { ILogin, IModel, IUser } from '../interfaces/userInterface';
import User from '../models/user';
import { generateCriptPassword } from '../Utils/bcryptFunctions';

export default class UserService  {
      
    public static async login (data: ILogin): Promise<boolean | IModel>  {
        const { email, password } = data;
      
        const user = await User.findOne({ where: { email } });
      
        if (!user) return false;
      
        const passwordCheck = compareSync(password, user.password);
      
        if (!passwordCheck) return false;
      
        const userFiltered = {
            id: user.id,
            username: user.username,
            email,
           };
      
        return userFiltered;
      };

    public static async create (data: IUser) {
        const {email, password, username} = data;
        
        const securePassword = generateCriptPassword(password);      

        const newUser = await User.create({email, password:securePassword, username})

        return {
            id: newUser.id,
            email,
            username
        }
    }

    public static async findByName (name: string) {
        const user = await User.findOne({where: { username: name}})
        return {id: user?.id}
    }

    public static validate (userInfo: IUser) {
        return userSchema.validate(userInfo);
    }

  } 



