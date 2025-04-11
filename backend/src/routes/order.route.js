// Import Express
import express from 'express';
import { createOrder } from '../controllers/order.controller.js';

// Import functions

// Create router
const orderRouter = express.Router();

// Create new order
orderRouter.post('/', createOrder);

//TODO: Get order by user

//TODO: Delete order

// Export router
export default orderRouter;
