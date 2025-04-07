// Import mongoose
import mongoose from "mongoose";
// Import models
import Comment from "../models/comment.model.js";
import Product from "../models/product.model.js";

/// /
// Function to create new comment
/// /
export const createComment = async (req, res, next) => {
    try {
        // Extract product id, comment content and user from request body
        const { content } = req.body;
        const user = req.user._id;
        const productId = req.params.productId;

        // Validate required fields
        if(!content) {
            return res.status(400).json({ message: "Content is required" });
        };

        // Validate if productId is valid MongoDB ObjectId
        if(!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid id" });
        };

        // Check if the product exists
        const product = await Product.findById(productId).exec();
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Create comment and associate with product
        const comment = await Comment.create({ content, product: productId, user });
        await comment.save();

        // Add comment to product comment array and save
        product.comments.push(comment._id);
        await product.save();

        // Send success response with status 201
        res.status(201).json({
            message: "Comment successfully created", // Success messafe
            data: comment // Created comment data
        })
    } catch (err) {
        // Log error
        console.error("Error creating comment", err);

        // Send error to next function in stack
        next(err);
    }
};

/// /
// Function to delete comment by commentId
/// /
export const deleteComment = async (req, res, next) => {
    try {
        // Extract comment id
        const { commentId } = req.params;
    
        // Validate if commentId is valid MongoDB ObjectId
        if(!mongoose.Types.ObjectId.isValid(commentId)) {
            // Return error and message if id is invalid
            return res.status(400).json({ message: "Invalid id" });
        };

        // Find comment by id
        const comment = await Comment.findById(commentId).exec();
        if(!comment) {
            return res.status(404).json({ message: "Could not find the comment" });    
        };
        
        //// TODO: Check if admin or regular user ////

        // Find associated product
        const product = await Product.findById(comment.product).exec();
        if(product) {
            // Remove comment from product's array
            product.comments = product.comments.filter(comment => comment.toString() !== commentId);
            await product.save();
        };

        // Delete comment
        await Comment.deleteOne({ _id: commentId }).exec();
  
        // Send success response with status 200 and success message
        res.status(200).json({ message: "Comment deleted successfully" });
        
    } catch (err) {
        // Log error message if deleting product fails
        console.error("Error deleting comment", err);

        // Send error to next middleware function in stackx
        next(err); 
    } 
};