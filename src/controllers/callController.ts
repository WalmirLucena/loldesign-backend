import { Request, Response } from 'express';
import CallService from '../services/callService';
import StatusCode from '../Utils/StatusCode';

export default class CallController {
    public static async create (req: Request,res: Response): Promise<typeof res>  {
        try {
            const newCall = await CallService.create(req.body);
            return res.status(StatusCode.CREATED).json(newCall);
            
        } catch (err) {
            return res.status(StatusCode.UNAUTHORIZED)
                  .json({ error: `${err}` });
        }
    }

    public static async read (req: Request,res: Response): Promise<typeof res> {
        try {
            const calls = await CallService.read();
            return res.status(StatusCode.OK).json(calls);
        } catch (err) {
            return res.status(StatusCode.UNAUTHORIZED)
                  .json({ error: `${err}` });
        }
    }

    public static async getByName(req: Request,res: Response): Promise<typeof res> {
        try {
            const calls = await CallService.getByName(req.body.name);
            return res.status(StatusCode.OK).json(calls);
            
        } catch (err) {
            return res.status(StatusCode.UNAUTHORIZED)
                  .json({ error: `${err}` });
        }
    }

    public static async delete (req: Request,res: Response): Promise<typeof res> {
        try {
            const {id, name } = req.body;
            const calls = await CallService.delete(id,name);
            return res.status(StatusCode.OK).json(calls)
            
        } catch (err) {
            return res.status(StatusCode.UNAUTHORIZED)
                  .json({ error: `${err}` });
        }
}
}