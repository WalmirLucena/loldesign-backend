import { log } from 'console';
import User from '../models/user';
import { CallData, ICall } from '../interfaces/callInterface';
import Call from '../models/calls';
import { calculatePrice } from '../Utils/calculatePrice';
import UserService from './userService';

export default class CallService  {
      
    public static async create (data: CallData): Promise<boolean | ICall>  {
        const { origin, destiny, time, plan, name } = data;

        const {price, priceWithPlan} = calculatePrice(data);        

        const userId = await UserService.findByName(name);
          
        const call = await Call.create({userId: userId.id, origin, destiny, time, plan, price, priceWithPlan})                  
      
        const callFiltered = {
            userId: call.userId,
            origin,
            destiny,
            time,
            plan,
            price,
            priceWithPlan
           };
      
        return callFiltered;
      };

      public static async read (): Promise<Call[]> {
          const calls = await Call.findAll({
              include: [
                  {model: User, as: 'users', attributes: ['username'] }
              ]
          });
          return calls;
      }


  } 



