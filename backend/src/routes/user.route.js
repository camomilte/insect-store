// Import Express
import express from 'express';
import { register } from '../controllers/user.controller.js';

// Create router
const userRouter = express.Router();

userRouter.post('/register', register);

// Export router
export default userRouter;