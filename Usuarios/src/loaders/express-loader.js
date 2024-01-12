import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import router from '../routes/index.js';
import { errorMiddleware } from '../middleware/error-middleware.js';
import { printDateMiddleware } from '../middleware/misc-middleware.js';
import { morganMiddleware } from '../config/morgan.js';
import { swaggerDoc } from '../openapi/index.js';

export default function(server){
    // Config
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true}));

    // Swagger
    server.get('/docs', (req, res) => res.send(swaggerDoc));
    server.use('/api-docs', swaggerUi.server, swaggerUi.setup(swaggerDoc));

    // MDW
    server.use(morganMiddleware);
    server.use(printDateMiddleware);

    // Routes
    server.use(router);

    // Error handler
    server.use(errorMiddleware);
}