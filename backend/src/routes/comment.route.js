// Import express 
import express from 'express';
// Import functions
import { deleteComment } from '../controllers/comment.controller.js';
import { verifyRoles, verifyToken } from '../middleware/auth.middleware.js';
// Import roles 
import ROLES from '../constants/roles.js';

// Create router
const commentRouter = express.Router();

// Delete comment
commentRouter.delete('/:commentId', verifyToken, verifyRoles(ROLES.ADMIN, ROLES.USER), deleteComment);

// Export router
export default commentRouter;