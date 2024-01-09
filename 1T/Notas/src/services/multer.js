import multer from 'multer';

const storage = multer.diskStorage({
  destination: './notes',
  filename: (req, file, cb) => {
    const originalnameWithoutExt = file.originalname.replace(/\.[^/.]+$/, '');
    const newFileName = originalnameWithoutExt + '.note';
    cb(null, newFileName); 
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'application/note' && file.originalname.slice(-5) !== '.note') {
    cb(null, true);
  } else {
    cb(null, true);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});