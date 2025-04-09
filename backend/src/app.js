// Import express
import express from 'express';

// Import routers
import productRouter from './routes/product.route.js';
import commentRouter from './routes/comment.route.js';
import userRouter from './routes/user.route.js';

// Import middlewares
import { errorHandler, notFound } from './middleware/error.middleware.js';
import cors from 'cors';

// Initialize express app
const app = express();

// Define origin whitelist
const whitelist = ['http://localhost:5173', 'http://localhost:8080']

// Apply CORS middleware
app.use(cors({
    // Check if origin is included in the whitelist
    origin: (origin, callback) => {
        // Allow requests that are in the white list or that have no origin (e.g. Postman)
        if(!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

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