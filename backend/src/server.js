// Import app
import app from './app.js';

// Set the server port from environment variables or default to 8000 if not provided
const PORT = process.env.PORT || 8000;

//// /
// This function starts the Express server
//// /
const startServer = async () => {
    try {
        // Start the Express server and listen on the specified PORT, logs message when server is running successfully
        app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
    } catch (err) {
        // Log error message if starting the Express server fails
        console.log('Failed to start server:', err.message);
        // Exit process
        process.exit(1);
    }
};

// Run startServer function
startServer();