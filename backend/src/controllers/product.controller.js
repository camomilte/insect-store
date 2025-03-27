// Import mongoose
import mongoose from "mongoose";
// Import product model
import Product from "../models/product.model.js";

//// /
// Function to create new product
//// /
export const createProduct = async (req, res, next) => {
    try {
        const { name, binomial, description, price, category, images } = req.body || {};

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
export const getProducts = async (req, res, next) => {
    try {
        // Fetch all products from database
        const allProducts = await Product.find();

        // Send retrieved products as JSON with a 200 status
        res.status(200).json(allProducts);

    } catch (err) {
        // Log error message if fetching products fail
        console.error("Error fetching products", err);

        // Send error to next middleware function in stack
        next(err);
    }
};

//// /
// Function to get product by id
//// /
export const getProductById = async (req, res, next) => {
    try {
        // Get product id
        const { productId } = req.params;

        // Validate if productId is valid MongoDB ObjectId
        if(!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid id" });
        };

        // Get product by id from database
        const product = await Product.findById(productId).exec();

        // Return error status 404 with message if product id is not found
        if(!product) {
            return res.status(404).json({ message: "The product you were looking for could not be found" });
        };

        // Send retrieved product as JSON with a 200 status
        res.status(200).json(product);


    } catch (err) {
        // Log error message if fetching product fails
        console.error("Error fetching product", err);

        // Send error to next middleware function in stack
        next(err);   
    }
};

