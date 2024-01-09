import express from 'express';

import { getNotes, deleteNote, editNote, postNote } from '../controllers/notes-controller.js';

const router = express.Router();

router.get('', getNotes);
router.post('', postNote);
router.patch('/:noteName', editNote);
router.delete('/:noteName', deleteNote);

export default router;