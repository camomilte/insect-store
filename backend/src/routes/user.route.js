// Import Express
import express from 'express';
// Import functions
import { getUser, login, register } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

// Create router
const userRouter = express.Router();

// Register user
userRouter.post('/register', register);

// Login user
userRouter.post('/login', login);

// Get user profile
userRouter.get('/profile', verifyToken, getUser);

// Export router
export default userRouter;