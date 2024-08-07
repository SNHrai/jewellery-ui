// src/services/axiosInstance.js

import axios from "axios";

// Determine base URL based on environment
const baseURL =
  import.meta.env.production.REACT_APP_ENV === "production"
    ? "https://api.production.com"
    : "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "multipart/form-data": { "Content-Type": "multipart/form-data" },
  },
});

export default axiosInstance;

