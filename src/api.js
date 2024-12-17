import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.in/api', // Replace with your API's base URL
    timeout: 10000, // Optional: Set a timeout (in ms)
    headers: { 'Content-Type': 'application/json' } // Optional: Set default headers
});

export default api;