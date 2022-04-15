import { Router } from 'express';
import CallController from '../controllers/callController';

const callRoute = Router();

callRoute.post('/', CallController.create)
callRoute.get('/', CallController.read)

export default callRoute;
