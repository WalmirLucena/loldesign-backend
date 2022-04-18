import { Router } from 'express';
import fs = require('fs');
import callRoute from './callRoutes';
import loginRoute from './userRoutes';
import swaggerUi = require('swagger-ui-express');

const swaggerFile = (process.cwd()+"/src/swagger.json");
const swaggerData = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

const route = Router();


route.use('/login',loginRoute);
route.use('/calls', callRoute);
route.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default route;
