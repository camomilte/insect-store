// Import express
import express from 'express';

// Import routers
import productRouter from './routes/product.route.js';
import commentRouter from './routes/comment.route.js';
import userRouter from './routes/user.route.js';

// Import error middlewares
import { errorHandler, notFound } from './middleware/error.middleware.js';

// Initialite express app
const app = express();

// Parse json
app.use(express.json());

// Routes for handling product-related request
app.use('/api/products', productRouter);
// Routes for handling comments on products
app.use('/api/comments', commentRouter);
//Routes for handling user authentication (login, register, etc.)
app.use('/api/auth', userRouter);


// Not Found middleware
app.use(notFound);
// Error handler middleware
app.use(errorHandler);

// Export app
export default app;