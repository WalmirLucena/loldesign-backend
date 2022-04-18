import { NextFunction, Request, Response } from 'express';
import UserService from '../services/userService';
import StatusCode from '../Utils/StatusCode';

export default class UserController  {
    
    public static async login (req: Request,res: Response): Promise<typeof res>  {
            try {
                const result = await UserService.login(req.body);
            
                if (!result) {
                  return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Incorrect email or password' });
                }
            
                return res.status(StatusCode.OK).json(result);
              } catch (err) {
                return res.status(StatusCode.INTERNAL_SERVER_ERROR)
                  .json({ error: `${err}` });
              }
      };

    public static async create (req: Request,res: Response): Promise<typeof res> {
        try {
            const newUser = await UserService.create(req.body);

            if(!newUser) return res.status(StatusCode.BAD_REQUEST).json({message: 'User already registred'});

            return res.status(StatusCode.CREATED).json(newUser)
            
        } catch (err) {
            return res.status(StatusCode.UNAUTHORIZED)
              .json({ error: `${err}` });
          }
  }

  public static validate (req: Request, res: Response, next: NextFunction) {
      const userInfo = req.body;
      const validation= UserService.validate(userInfo);

      if(validation.error){
          res.status(500).json({message: validation.error.message})
      }

      return next()
  }
  
}



