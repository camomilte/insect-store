// Import mongoose
import mongoose from "mongoose";
// Import bcrypt
import bcrypt from "bcryptjs";
// Import user model
import User from "../models/user.model.js";
import { generateToken } from "../lib/generateToken.js";
import ROLES from "../constants/roles.js";

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

        // Generate rando salt 10 rounds
        const salt = await bcrypt.genSalt(10);
        // Hash password with generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Create JSON Web Token
        const token = generateToken(user);

        // Respond with success status and user
        res.status(201).json({ 
            _id: user._id, 
            username: user.username,
            token, 
            role: user.role
        });

    } catch (err) {
        // Log error message if register fails
        console.error("Error registering user", err);

        // Send error to next middleware function in stack
        next(err); 
    }
};

//// /
// Function to login user
//// /
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if(!email || !password) {
            // Return error status and message if any of these fields are empty
            return res.status(400).json({ message: "Please enter all fields" });
        };

        // Find user by email
        const user = await User.findOne({ email }).exec();

        // If no user is found return error response
        if(!user) {
            return res.status(401).json({ message: "Invalid credentials "});
        };

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);

        // If hashed passwords do not match return error response
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials "});
        };

        // Generate JSON Web Token
        const token = generateToken(user);

        // Respond with success status and user
        res.status(201).json({ 
            _id: user._id, 
            username: user.username,
            token, 
            role: user.role
        });

    } catch (err) {
        // Log error message if login fails
        console.error("Error loging in user", err);

        // Send error to next middleware function in stack
        next(err); 
    }
};

//// /
// Function to get user
//// /
export const getUser = async (req, res, next) => {
    try {
        // Get user from database by id, excluding password
        const user = await User.findById(req.user._id, "-password").exec();

        // Validate if user exists
        if(!user) {
            // Return error response if user is not found
            return res.status(404).json({ message: "User not found" });
        };

        // Send success response with status 200 and success message
        res.status(200).json({
            message: "Profile fetched successfully",
            data: user
        });

    } catch (err) {
         // Log error message if getting user profile fails
         console.error("Error getting user profile", err);

         // Send error to next middleware function in stack
         next(err); 
    }
};

//// /
// Function to update role
//// /
export const updateRole = async (req, res, next) => {
    try {
        // Extract user from request body
        const { role } = req.body;
        // Get all roles
        const rolesArray = Object.values(ROLES);

        // Validate if any role is provided
        if(!role) {
            // If no role is provided return error response
            return res.status(400).json({ message: `Please enter one of following roles: (${rolesArray.join(', ')})` });
        };

        // Trim and convert role to lowercase
        const normalizedRole = role.trim().toLowerCase();

        // Validate if role provided exists
        if(!rolesArray.includes(normalizedRole)) {
            // If role does not match any available roles return error response
            return res.status(400).json({ message: `Roles must be one of the following: (${rolesArray.join(', ')})` });
        };

        // Get user by userId
        const user = await User.findById(req.params.userId).exec();

        // Validate if user exists
        if(!user) {
            // If user does not exist in database return error response
            return res.status(404).json({ message: "User not found" })
        };

        // Update role
        user.role = normalizedRole;
        await user.save();

        // Respond with a success status and updated role
        res.status(200).json({ message: "Role succefully updated to " + normalizedRole });
        
    } catch (err) {
        // Log error message if updating role fails
        console.error("Error updating role", err);

        // Send error to next middleware function in stack
        next(err); 
    }
};