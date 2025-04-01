// Import Express
import express from 'express';
//Import functions
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js';
import { createComment } from '../controllers/comment.controller.js';


// Create router
const productRouter = express.Router();

productRouter.route('/')
    // Create new product
    .post(createProduct)
    // Get all products in database
    .get(getProducts);

productRouter.route('/:productId')
    // Get product by id
    .get(getProductById)
    // Update product
    .patch(updateProduct)
    // Delete product
    .delete(deleteProduct);

productRouter.route('/:productId/comments')
    // Create new comment
    .post(createComment);

// Create new product
////productRouter.post('/', createProduct);

// Get all products in database
////productRouter.get('/', getProducts);

// Get product by id
////productRouter.get('/:productId', getProductById);

// Update product
////productRouter.patch('/:productId', updateProduct);

// Delete product
////productRouter.delete('/:productId', deleteProduct);


// Export router
export default productRouter;