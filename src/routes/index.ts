import { Router } from 'express';
import callRoute from './callRoutes';
import loginRoute from './userRoutes';

const route = Router();

/* route.use('/', (req,res) => {
    res.status(200).json('ok');
}); */
route.use('/login',loginRoute);
route.use('/calls', callRoute);

export default route;
