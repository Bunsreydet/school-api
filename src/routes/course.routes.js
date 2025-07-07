import express from 'express';
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from '../controllers/course.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Apply JWT authentication to all course routes
router.use(authenticateToken);

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
