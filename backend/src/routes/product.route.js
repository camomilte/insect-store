// Import Express
import express from 'express';
//Import functions
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js';


// Create router
const productRouter = express.Router();

// Create new product
productRouter.post('/', createProduct);

// Get all products in database
productRouter.get('/', getProducts);

// Get product by id
productRouter.get('/:productId', getProductById);

// Update product
productRouter.patch('/:productId', updateProduct);

// Delete product
productRouter.delete('/:productId', deleteProduct);


// Export router
export default productRouter;