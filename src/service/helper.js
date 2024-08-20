import axios from "axios";

// Base URL for the API
export const BASE_URL = 'http://localhost:5000';

// Create an Axios instance with the base URL
export const Axios = axios.create({
    baseURL: BASE_URL
});