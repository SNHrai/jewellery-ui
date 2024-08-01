// utils/authUtils.js
import jwtDecode from "jwt-decode";

// Function to set the JWT token in localStorage
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

// Function to get the JWT token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Function to remove the JWT token from localStorage
export const removeAuthToken = () => {
  localStorage.removeItem("token");
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token; // Return true if token exists, false otherwise
};

// Function to get user roles from the JWT token
// Function to get user roles from the JWT token
export const getUserRoles = () => {
  const token = getAuthToken();
  if (!token) return [];

  const decodedToken = jwtDecode(token);

  // Assuming roles are stored as an array in the token, remove "ROLE_" prefix
  return (decodedToken.roles || []).map((role) => role.replace(/^ROLE_/, ""));
};
