import { Router } from 'express';
import CallController from '../controllers/callController';

const callRoute = Router();

callRoute.post('/', CallController.create);
callRoute.get('/', CallController.read);
callRoute.delete('/', CallController.delete);
callRoute.get('/name', CallController.getByName);

export default callRoute;
