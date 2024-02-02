import express from 'express';
import { getUsers, getUser, postUser, updateUser, deleteUser } from '../controllers/users-controller.js';
import { parseQuery } from '../middleware/query-middleware.js';

const router = express.Router();

router.get('/', parseQuery, getUsers);
router.get('/:id', parseQuery, getUser);
router.post('/', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;