import express from 'express';
import { downloadFile, uploadFile } from '../controllers/file-controller.js';

const router = express.Router();

router.post('/upload', uploadFile);
router.get('/download/:filename', downloadFile);

export default router;
