// Import express
import express from 'express';

// Import routers
import productRouter from './routes/product.route.js';
import commentRouter from './routes/comment.route.js';

// Import error middlewares
import { errorHandler, notFound } from './middleware/error.middleware.js';

// Initialite express app
const app = express();

// Parse json
app.use(express.json());


app.use('/api/products', productRouter);
app.use('/api/comments', commentRouter);

// Not Found middleware
app.use(notFound);
// Error handler middleware
app.use(errorHandler);

// Export app
export default app;