import express from 'express';
import {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
    registerTeacher,
    loginTeacher
} from '../controllers/teacher.controller.js';
<<<<<<< HEAD
import validation from '../middleware/validation.js';
const router = express.Router();

router.post('/register', registerTeacher);
router.post('/login', loginTeacher);

router.use(validation); // Apply validation middleware to all routes below  

router.get('/checkTeacherAuth', (req, res) => {
    res.json({ success: true, user: req.user });
});
=======
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Apply JWT authentication to all teacher routes
router.use(authenticateToken);
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0

router.post('/', createTeacher);
router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;