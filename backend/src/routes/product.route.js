// Import Express
import express from 'express';
//Import functions
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js'; // Products
import { createComment } from '../controllers/comment.controller.js'; // Comments
import { verifyToken, verifyRoles } from '../middleware/auth.middleware.js'; // Tokens
// Import roles
import ROLES from '../constants/roles.js';

// Create router
const productRouter = express.Router();


// Create new product
productRouter.post('/', verifyToken, verifyRoles(ROLES.ADMIN), createProduct);

// Get all products in database
productRouter.get('/', getProducts);

// Get product by id
productRouter.get('/:productId', getProductById);

// Update product
productRouter.patch('/:productId', verifyToken, verifyRoles(ROLES.ADMIN), updateProduct);

// Delete product
productRouter.delete('/:productId', verifyToken, verifyRoles(ROLES.ADMIN), deleteProduct);


// Create new comment on product
productRouter.post('/:productId/comments', verifyToken, verifyRoles(ROLES.ADMIN, ROLES.USER), createComment);


// Export router
export default productRouter;