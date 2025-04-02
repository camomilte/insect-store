// Import Express
import express from 'express';
//Import functions
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js'; // Products
import { createComment } from '../controllers/comment.controller.js'; // Comments
import { verifyToken } from '../middleware/auth.middleware.js'; // Tokens


// Create router
const productRouter = express.Router();


// Create new product
productRouter.post('/', verifyToken, createProduct);

// Get all products in database
productRouter.get('/', getProducts);

// Get product by id
productRouter.get('/:productId', getProductById);

// Update product
productRouter.patch('/:productId', verifyToken, updateProduct);

// Delete product
productRouter.delete('/:productId', verifyToken, deleteProduct);


// Create new comment on product
productRouter.post('/:productId/comments', verifyToken, createComment);


// Export router
export default productRouter;