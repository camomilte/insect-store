// Import Express
import express from 'express';
import { createOrder } from '../controllers/order.controller.js';
import { verifyRoles, verifyToken } from '../middleware/auth.middleware.js';
//Import roles
import ROLES from '../constants/roles.js';

// Import functions

// Create router
const orderRouter = express.Router();

// Create new order
orderRouter.post('/', verifyToken, verifyRoles(ROLES.ADMIN, ROLES.USER), createOrder);

//TODO: Get order by user

//TODO: Delete order

// Export router
export default orderRouter;
