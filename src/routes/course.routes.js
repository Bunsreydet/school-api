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

<<<<<<< HEAD
router.use(validation);
=======
// Apply JWT authentication to all course routes
router.use(authenticateToken);
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
