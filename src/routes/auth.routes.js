import express from 'express';
import { register, login, getUsers } from '../controllers/auth.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// POST /auth/register - No authentication required
router.post('/register', register);

// POST /auth/login - No authentication required
router.post('/login', login);

// GET /auth/users - JWT authentication required
router.get('/users', authenticateToken, getUsers);

export default router;
