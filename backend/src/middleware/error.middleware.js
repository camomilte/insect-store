//// /
// This function handles 404 Not Found errors
//// /
export const notFound = (req, res, next) => {
    // Create an error object with a message including the requested URL
    const error = new Error(`Not Found - ${req.originalUrl}`);
    
    // Set the response status code to 404 (Not Found)
    res.status(404);
   
    // Pass the error to the next function in the stack
    next(error); 
}

//// /
// This function catches and handles errors globally
//// /
export const errorHandler = (err, req, res, next) => {
    // Log the error message to the console
    console.log(`Error: ${err.message}`);

    // If status code is still 200 (default), change to 500 (Internal Server Error). 
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    // Send a JSON response with the error message
    res.status(statusCode).json({
        message: err.message,
        // Only include stack in development mode
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
}; 