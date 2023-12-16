/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './users.js';
import { adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';
import validarTokenMiddleware from '../middlewares/ej1-middleware.js';
import { generarToken, rutaProtegida } from '../controllers/ej1-controller.js';

const router = express.Router();

router.get('/admin', validateAdminMiddleware, adminAccessController);
router.use('/user', userRouter);

// ej1
router.get('/generar-token', generarToken);
router.get('/ruta-protegida', validarTokenMiddleware, rutaProtegida);

// ej2
router.get('/public');
router.get('/vip');
router.get('/admin');

export default router;
