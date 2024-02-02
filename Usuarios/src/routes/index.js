import express from 'express';
import userRouter from './users.js';
import { pingController, adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middleware/misc-middleware.js';
import { login } from '../controllers/login-controller.js';
import { postUser } from '../controllers/users-controller.js';
import { checkToken } from '../middleware/auth-middleware.js';

const router = express.Router();

router.get('/ping', pingController);
router.post('/login', login);
router.post('/signin', postUser);
router.get('/admin', validateAdminMiddleware, adminAccessController);

router.use('/user', userRouter);

export default router;