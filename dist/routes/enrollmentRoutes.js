import express from 'express';
import { createEnrollment, getEnrollments } from '../controllers/enrollmentController.js';
import { protect } from '../middlewares/auth.js';
const router = express.Router();
router.post('/', createEnrollment);
router.get('/', protect, getEnrollments);
export default router;
