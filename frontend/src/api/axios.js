// Import axios
import axios from "axios";

// Define the base URL
const BASE_URL = "http://localhost:8080/";

// Create and export pre-configured Axios instance
export default axios.create({
    baseURL: BASE_URL, 
    /* headers: {
        "Content-type": "application/json",
    },
    withCredentials: true */
});
