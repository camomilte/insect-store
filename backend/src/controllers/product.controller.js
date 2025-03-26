// Import mongoose
import mongoose from "mongoose";
// Import product model
import Product from "../models/product.model.js";

//// /
// Function to create new product
//// /
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, images } = req.body || {}; 
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

