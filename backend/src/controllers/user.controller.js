// Import mongoose
import mongoose from "mongoose";
// Import bcrypt
import bcrypt from "bcryptjs";
// Import user model
import User from "../models/user.model.js";

//// /
// Function to register user
//// /
export const register = async (req, res, next) => {
    try {
        // Get username, email and password from request body
        const { username, email, password } = req.body;

        // Validate required fields
        if(!username || !email || !password) {
            // Return error status and message if any of these fields are empty
            return res.status(400).json({ message: "Please enter all fields" });
        };

        // If user already exists, return error response
        if(await User.exists({ email })) {
            return res.status(409).json({ message: "This user already exits "});
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

    } catch (err) {
        // Log error message if register fails
        console.error("Error registering user", err);

        // Send error to next middleware function in stack
        next(err); 
    }
}