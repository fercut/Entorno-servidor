import express from 'express';
import authMiddleware from '../middlewares/auth-middleware.js';
import { upload } from '../services/multer.js';
import notesRouter from './notes.js';
import authRouter from './auth.js';
import uploadRotuer from './upload.js';

const router = express.Router();

router.use('/notes',authMiddleware,
 notesRouter);
router.use('/auth', authRouter);
router.use('/files', upload.single('file'), uploadRotuer);

export default router;