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
        type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of a referenced document
        ref: 'Category', // References the 'Category' model, establishing a relationship
      },
      images: [{
        type: String, // Image URLs stored as strings
        trim: true, 
      }]
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a Mongoose model for the 'Product' collection
const Product = mongoose.model('Product', productSchema);

// Export product model
export default Product;