// Import Express
import express from 'express';
// Import functions
import { getUser, login, register } from '../controllers/user.controller.js';
import { verifyRoles, verifyToken } from '../middleware/auth.middleware.js';
// Import roles
import ROLES from '../constants/roles.js';

// Create router
const userRouter = express.Router();

// Register user
userRouter.post('/register', register);

// Login user
userRouter.post('/login', login);

// Get user profile
userRouter.get('/profile', verifyToken, getUser);

// Update user
userRouter.post('/role/:userId', verifyToken, verifyRoles(ROLES.ADMIN));

// Export router
export default userRouter;