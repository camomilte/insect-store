// Import mongoose
import mongoose from "mongoose";

// Create comment schema using mongoose
const commentSchema = new mongoose.Schema ({
    content: {
        type: String, // Comment is stored as a string
        required: true // Comment is mandatory to avoid empty comment
    },
    // User will be included here shortly
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }

}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;