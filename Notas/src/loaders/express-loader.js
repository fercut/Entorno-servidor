import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { printDateMiddleware } from "../middlewares/misc-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { morganMiddleware } from "../config/morgan.js";
import { swaggerDoc } from '../openapi/openapi.js';
import router from '../routes/index.js';
 
export default function (server){
	
  server.use(cors());
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
  
  server.use('/api-docs', swaggerUi.serve);
  server.get('/api-docs', swaggerUi.setup(swaggerDoc));

	server.use(morganMiddleware);
	server.use(printDateMiddleware);
	server.use(router);
	server.use(errorMiddleware);
}