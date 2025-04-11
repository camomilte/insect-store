// Import mongoose
import mongoose from "mongoose";
// Import models
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

/// /
// Function to create new order
/// /
export const createOrder = async (req, res, next) => {
    try {
        // Get required fields from the request body
        const { user, products } = req.body;
        let totalPrice = 0;
        
        // Validate if required fields are filled
        if(!user || !products ) {
            return res.status(400).json({ message: "Order data is missing or incomplete" });
        };

        // Validate each product in the order
        for(const item of products) {
            const { productId } = item;
    
            // Check if productId is valid MongoDB ObjectId
            if(!mongoose.Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ message: `Invalid product id: ${productId}` });
            };
        
            // Check if the product exists in database
            const product = await Product.findById(productId).exec();
            if (!product) {
                return res.status(404).json({ message: `Product not found: ${productId}` });
            };

            // Calculate total price
            totalPrice += product.price * item.quantity;
        };


        // Create and save new order
        const newOrder = new Order({ user, products, totalPrice });
        await newOrder.save();

        // Respond with success message and created order
        res.status(201).json({
            message: "Order created",
            order: newOrder
        });

    } catch (err) {
         // Log error
         console.error("Error creating order", err);

         // Send error to next function in stack
         next(err);
    }
};



//TODO: Get order by user

//TODO: Delete order