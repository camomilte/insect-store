// Import mongoose
import mongoose from "mongoose";

// Create comment schema using mongoose
const commentSchema = new mongoose.Schema ({
    content: {
        type: String, // Comment is stored as a string
        required: true // Comment is mandatory to avoid empty comment
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }

}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;