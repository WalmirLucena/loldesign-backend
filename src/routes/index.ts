import { Router } from 'express';
import loginRoute from './userRoutes';

const route = Router();

route.use('/', (req,res) => {
    res.status(200).json('ok');
});
route.use('/user',loginRoute);

export default route;
