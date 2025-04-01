// Import express 
import express from 'express';
import { deleteComment } from '../controllers/comment.controller.js';

// Create router
const commentRouter = express.Router();

// Delete comment
commentRouter.delete('/:commentId', deleteComment);

// Export router
export default commentRouter;