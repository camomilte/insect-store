// Import mongoose
import mongoose from "mongoose";
// Import product model
import Product from "../models/product.model.js";

//// /
// Function to create new product
//// /
export const createProduct = async (req, res) => {
    try {
        const { name, binomial, description, price, category, images } = req.body || {};
        console.log(req.body) 

        // Validate required fields
        if( !name || !binomial || !description || !price ) {
            // Return error status and message if any of these fields are empty
            return res.status(400).json({ message: "Name, binomial, despcription and price are required!"});
        };

        // Create a new product document and save it to the database
        const product = await Product.create({ name, binomial, description, price, category, images });

        // Return success response with status 201
        return res.status(201).json({
            message: "Product created successfully", // Success message
            data: product // Created product data
        }); 

    } catch (err) {
        // Log error
        console.error("Error creating product", err);
        // Send error to next function in stack
        next(err);
    }
};

//// /
// Function to get all products
//// /
/* export const getProducts = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}; */

