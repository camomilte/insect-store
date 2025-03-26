// Import express
import express from 'express';
// Import product router
import productRouter from './routes/product.route.js';
// Import error middlewares
import { errorHandler, notFound } from './middleware/error.middleware.js';

// Initialite express app
const app = express();

// Parse 
app.use(express.json());


app.use('/api/products', productRouter);

// Not Found middleware
app.use(notFound);
// Error handler middleware
app.use(errorHandler);

// Export app
export default app;