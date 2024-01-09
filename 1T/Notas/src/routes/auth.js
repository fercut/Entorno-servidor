import express from 'express';
import { authenticateUser, createUser } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('', authenticateUser);
router.post('/signup', createUser);

export default router;