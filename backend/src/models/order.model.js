// Import mongoose
import mongoose from "mongoose";

// Create order schema using mongoose
const orderSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1 // Order must contain at least one product
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'pending'
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create a Mongoose model for the 'Order' collection
const Order = mongoose.model('Order', orderSchema);

// Export order model
export default Order;