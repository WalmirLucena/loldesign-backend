import { Router } from 'express';

const route = Router();

route.use('/', (req,res) => {
    res.status(200).json('ok');
});

export default route;
