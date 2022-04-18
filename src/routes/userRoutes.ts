import { Router } from 'express';
import UserController from '../controllers/userController';

const loginRoute = Router();

loginRoute.post('/create', UserController.validate,UserController.create);
loginRoute.post('/', UserController.login);

export default loginRoute;
