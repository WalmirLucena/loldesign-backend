import { Router } from 'express';
import UserController from '../controllers/userController';

const loginRoute = Router();

loginRoute.post('/', UserController.validate,UserController.create);
loginRoute.get('/', UserController.login);

export default loginRoute;
