import axios from 'axios';

// Create an instance of Axios with custom configuration if needed
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Replace with your backend API base URL
    timeout: 5000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json'
        // Add any other headers as needed
    }
});

// Define your API methods
const apiService = {
    joinGame(data) {
        return api.post('/join-game', data);
    },
    // Add more API methods as needed
};

export default apiService;