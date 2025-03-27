// Import mongoose
import mongoose from "mongoose";

// Create product schema using mongoose
const productSchema = new mongoose.Schema({
    name: {
        type: String, // Product name stored as a string
        required: true, // Name is required
        trim: true, // Removes unnecessary whitespace
        unique: true, // Ensures name is unique, avoiding duplicates
        minlength: 1 // Minimum length of 1 character to avoid empty names
      },
    binomial: {
        type: String, // Binomial name is stored as a string
        required: true, // Binomial name is mandatory
        trim: true,
        minlength: 1
    },
    description: {
        type: String, // Description stored as a string
        required: true, // Description is required
        trim: true 
        },
    price: {
        type: Number, // Price stored as number
        required: true, // Price is required
        min: 0.01, // Enforce a minimum positive price
        },
    category: {
        type: String, // Category is stored as a string
        trim: true, 
        minlength: 1
        },
    images: [{
        type: String, // Image URLs stored as strings
        trim: true, 
        match: /^https?:\/\/.*\.(jpg|jpeg|png)$/ // Validate image URLs
        }]
    }, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a Mongoose model for the 'Product' collection
const Product = mongoose.model('Product', productSchema);

// Export product model
export default Product;