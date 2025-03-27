// Import Express
import express from 'express';
//Import functions
import { createProduct, getProducts } from '../controllers/product.controller.js';


// Create router
const productRouter = express.Router();

// Create new product
productRouter.post('/', createProduct);

// Get all products in database
productRouter.get('/', getProducts);


// Export router
export default productRouter;