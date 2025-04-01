// Import express 
import express from 'express';
import { deleteComment } from '../controllers/comment.controller.js';

// Create router
const commentRouter = express.Router();


commentRouter.delete('/:commentId', deleteComment);

export default commentRouter;