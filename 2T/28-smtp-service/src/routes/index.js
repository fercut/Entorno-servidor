import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
<<<<<<< HEAD
=======
import { mailController } from '../controllers/mail-controller.js';
>>>>>>> dfd062b0318b791dd9ba09840a4be63e47b75ac7

const router = express.Router();

router.post('/login', login);

router.use(miscRouter);

export default router;
