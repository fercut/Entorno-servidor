import express from 'express';
import filesRouter from './files.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: './files',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.use('/files', upload.single('file'), filesRouter);

export default router;
