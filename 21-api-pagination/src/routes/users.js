import express from 'express';
import { getFilterUsers, getOrderUsers, getPaginationUsers, getUsers } from '../controllers/users-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/order-users', getOrderUsers);
router.get('/filter-users', getFilterUsers);
router.get('/paginate-users', getPaginationUsers);

export default router;