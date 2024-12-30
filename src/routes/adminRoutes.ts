import express from 'express';
import { loginAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/', loginAdmin);

export default router;