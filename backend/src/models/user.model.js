// Import mongoose
import mongoose from 'mongoose';
// Import roles
import ROLES from '../constants/roles.js';

// Create user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String, // Username is stored as a string
        required: true, // Username is required
        trim: true, // Removes unnessecary whitespace
        unique: true, // Username must be unique
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'] // Email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 8 // Password must be at least 8 characters long
    },
    role: {
        type: String,
        enum: [...Object.values(ROLES)],
        default: ROLES.USER
    }
}, { timestamps: true }) // Automatically adds createdAt and updatedAt fields


// Create a user model for the 'User' collection
const User = mongoose.model('User', userSchema);

// Export user model
export default User;