// Import app
import app from './app.js';
// Import mongoose
import mongoose from 'mongoose';

// Set the server port from environment variables or default to 8000 if not provided
const PORT = process.env.PORT || 8000;
// Retrieve MongoDB connection URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

//// /
// Function to establish connection to MongoDB
//// /
const dbConnnect = async () => {
    try {
        // Connect to MongoDB using mongoose
        const mongo = await mongoose.connect(MONGO_URI);
        // Log a success message with the connected host
        console.log(`MongoDB Connected: ${mongo.connection.host}`);
    } catch (err) {
        // Log error message if connection fails
        console.log(`MongoDB Connection Error: ${err.message}`);
        // Exit app with failure code (1) to indicate an error
        process.exit(1);
    }
};

//// /
// Function to start the Express server
//// /
const startServer = async () => {
    try {
        // Await connection with database
        await dbConnnect();
        // Start the Express server and listen on the specified PORT, logs message when server is running successfully
        app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
    } catch (err) {
        // Log error message if starting the Express server fails
        console.log('Failed to start server:', err.message);
        // Exit app with failure code (1) to indicate an error
        process.exit(1);
    }
};

// Run startServer function
startServer();