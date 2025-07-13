import express from 'express';
import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/student.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();
router.use(validation);


// Apply JWT authentication to all student routes
router.use(authenticateToken);

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
