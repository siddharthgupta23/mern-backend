import express from 'express';
import { createEnrollment, getEnrollments } from '../controllers/enrollmentController';
import { protect } from '../middlewares/auth';

const router = express.Router();

router.post('/', createEnrollment);
router.get('/', protect, getEnrollments);

export default router;