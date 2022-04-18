import { Router } from 'express';
import CallController from '../controllers/callController';

const callRoute = Router();

callRoute.post('/', CallController.create);
callRoute.get('/', CallController.read);
callRoute.delete('/:id', CallController.delete);
callRoute.get('/:id', CallController.getById);

export default callRoute;
