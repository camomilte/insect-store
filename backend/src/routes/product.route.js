// Import Express
import express from 'express';
//Import functions
import { createProduct } from '../controllers/product.controller.js';


// Create router
const productRouter = express.Router();

//Create new product
productRouter.post('/', createProduct);

// Export router
export default productRouter;