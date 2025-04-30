// Import Express
import express from 'express';
import { createOrder, deleteOrder } from '../controllers/order.controller.js';
import { verifyRoles, verifyToken } from '../middleware/auth.middleware.js';
//Import roles
import ROLES from '../constants/roles.js';

// Import functions

// Create router
const orderRouter = express.Router();

// Create new order
orderRouter.post('/', verifyToken, verifyRoles(ROLES.ADMIN, ROLES.USER), createOrder);

// Delete order
orderRouter.delete('/:orderId', verifyToken, verifyRoles(ROLES.ADMIN), deleteOrder);

//TODO: Get order by user

// Export router
export default orderRouter;
