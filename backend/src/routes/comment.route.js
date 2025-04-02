// Import express 
import express from 'express';
// Import functions
import { deleteComment } from '../controllers/comment.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

// Create router
const commentRouter = express.Router();

// Delete comment
commentRouter.delete('/:commentId', verifyToken, deleteComment);

// Export router
export default commentRouter;