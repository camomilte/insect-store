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
        // Fetch all products from database including associated comments
        const allProducts = await Product.find().populate({
            path: 'comments',
            populate: {
                path: 'user',
                select: 'username'
            }
        });

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

        // Get product by id from database and associated comments
        const product = await Product.findById(productId).populate({
            path: 'comments',
            populate: {
                path: 'user',
                select: 'username'
            }
        });

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

//// /
// Function to update product
//// /
export const updateProduct = async (req, res, next) => {
    try {
        // Extract product id and other fields from request body
        const { productId } = req.params;
        const { name, binomial, description, price, category, images } = req.body;

        // Check if productId is valid MongoDB ObjectId
        if(!mongoose.Types.ObjectId.isValid(productId)) {
            // Return error and message if id is invalid
            return res.status(400).json({ message: "Invalid id" });
        };

        // Prepare update object
        const toUpdate = {};

        if(name) toUpdate.name = name;  // If 'name' is provided, add it to the update object
        if(binomial) toUpdate.binomial = binomial;  // If 'binomial' is provided, add it to the update object
        if(description) toUpdate.description = description;  // If 'description' is provided, add it to the update object
        if(price) toUpdate.price = price;  // If 'price' is provided, add it to the update object
        if(category) toUpdate.category = category;  // If 'category' is provided, add it to the update object
        if(images) toUpdate.images = images;  // If 'images' is provided, add it to the update object

        // If no fields are provided for update, return error response
        if(Object.keys(toUpdate).length === 0) {
            return res.json(400).json({ message: "No changes provided "});
        };

        // Update product using productId and the update object
        const updatedProduct = await Product.findByIdAndUpdate(productId, toUpdate, { new: true }).exec();

        // If no product is found return a 404 error with message
        if(!updatedProduct) {
            return res.status(404).json({ message: "Could not find the product that you were looking for" });
        };

        // Respond with a success status and the updated data
        res.status(200).json({
            message: "Product updated successfully", // Success message
            data: updatedProduct // Updated product data
        });

    } catch (err) {
        // Log error message if updating product fails
        console.error("Error updating product", err);

        // Send error to next middleware function in stack
        next(err); 
    }
};

//// /
// Function do find and delete product by Id
//// /
export const deleteProduct = async (req, res, next) => {
    try {
        // Get product id
        const { productId } = req.params;
    
        // Validate if productId is valid MongoDB ObjectId
        if(!mongoose.Types.ObjectId.isValid(productId)) {
            // Return error and message if id is invalid
            return res.status(400).json({ message: "Invalid id" });
        };
    
        // Find and delete product using productId provided
        const product = await Product.findByIdAndDelete(productId).exec();
    
        // If no product is found return a 404 error with message
        if(!product) {
            return res.status(404).json({ message: "Could not find the product that you were looking for"});
        };
    
        // Respond with success status and message
        res.status(200).json({ message: `Successfully deleted product. Id: ${productId}`});

    } catch (err) {
        // Log error message if deleting product fails
        console.error("Error deleting product", err);

        // Send error to next middleware function in stack
        next(err); 
    }
};




