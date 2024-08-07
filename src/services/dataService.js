// src/services/dataService.js

import axiosInstance from './axiosInstance';

// Function to handle GET requests
export const get = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle POST requests
export const post = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle PUT requests
export const put = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle DELETE requests
export const del = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.delete(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Centralized error handling
const handleError = (error) => {
  // Log error to external service or console
  console.error('API Error:', error);
  // Display user-friendly message or notification
  // For example, using toast notifications
};

