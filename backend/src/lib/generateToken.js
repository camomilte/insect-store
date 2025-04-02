// Import JsonWebtoken
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign(
        { userInfo: { _id: user._id, username: user.username, role: user.role } }, // Payload
        process.env.ACCESS_TOKEN_SECRET, // Secret key
        { expiresIn: '1h' } // Token expiration time
    );
};
