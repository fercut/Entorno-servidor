import {Router} from 'express';
import { getUserController } from '../controllers/users-controller';

const router = Router();

router.get('/', getUserController);

export default router;
