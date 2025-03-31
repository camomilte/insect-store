// Import mongoose
import mongoose from "mongoose";
// Import comment model
import Comment from "../models/comment.model.js";
import Product from "../models/product.model.js";

//// /
// Function to create new comment
//// /
export const createComment = async (req, res, next) => {
    try {
        // Extract product id and comment content from request body
        const { content } = req.body;
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
        const comment = await Comment.create({ content, product: productId });
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

//// /
// Function to delete comment by commentId
//// /
export const deleteComment = async (req, res, next) => {
    // Extract comment id
    const { commentId } = req.params;

    // Validate if commentId is valid MongoDB ObjectId
    if(!mongoose.Types.ObjectId.isValid(commentId)) {
        // Return error and message if id is invalid
        return res.status(400).json({ message: "Invalid id" });
    };
}