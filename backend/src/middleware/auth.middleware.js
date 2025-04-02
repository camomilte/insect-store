// Import JsonWebtoken
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        // Get authorization header
        const authHeader = req.headers.authorization || req.headers.Authorization;

        // Check if token exists and starts with "Bearer "
        if(!authHeader?.startsWith('Bearer ')) {
            // Return error response with message
            return res.status(401).json({ message: "Not authenticated. No token provided." });
        };

        // Extract token and removing "Bearer "
        const token = authHeader.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Attach user to request object
        req.user = decoded.userInfo;

        // Proceed to next middleware
        next();

    } catch (err) {
        // Return error response
        return res.status(401).json({ message: "Not authenticated." });
    }
};