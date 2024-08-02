import { jwtDecode } from "jwt-decode";

// // Function to set the JWT token in localStorage
// export const setAuthToken = (token) => {
//   console.log("from auth", token);
//   try {
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//     }
//   } catch (e) {
//     if (e.name === "QuotaExceededError") {
//       console.error("Storage quota exceeded. Clearing some space.");
//       // Clear storage and try again
//       localStorage.clear();
//       try {
//         localStorage.setItem("token", token);
//       } catch (e) {
//         console.error("Failed to set token after clearing storage.", e);
//       }
//     } else {
//       throw e;
//     }
//   }
// };

// // Function to get the JWT token from localStorage
// export const getAuthToken = () => {
//   return localStorage.getItem("token");
// };

// // Function to remove the JWT token from localStorage
// export const removeAuthToken = () => {
//   localStorage.removeItem("token");
// };

// // Function to check if the user is authenticated
// export const isAuthenticated = () => {
//   const token = getAuthToken();
//   return !!token; // Return true if token exists, false otherwise
// };

// // Function to get user roles from the JWT token
// export const getUserRoles = () => {
//   console.log("from auth getUserRoles");
//   const token = getAuthToken();
//   if (!token) return [];

//   const decodedToken = jwtDecode(token);
//   console.log("from auth getUserRoles decodedToken", decodedToken);
//   // Assuming roles are stored as an array in the token
//   return (decodedToken.roles || []).map((role) => role.replace(/^ROLE_/, ""));
// };

// Utility function to decode Base64URL
const base64UrlDecode = (str) => {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = str.length % 4;
  if (pad) {
    str += new Array(5 - pad).join('=');
  }
  return atob(str);
};

// Function to decode JWT
const decodeJwt = (token) => {
  const base64Url = token.split('.')[1];
  if (!base64Url) {
    throw new Error('Invalid JWT token');
  }
  const base64 = base64UrlDecode(base64Url);
  return JSON.parse(base64);
};

// Function to set the JWT token in localStorage
export const setAuthToken = (token) => {
  console.log("from auth", token);
  try {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      console.error("Storage quota exceeded. Clearing some space.");
      localStorage.clear();
      try {
        localStorage.setItem("token", token);
      } catch (e) {
        console.error("Failed to set token after clearing storage.", e);
      }
    } else {
      throw e;
    }
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
  console.log("from auth getUserRoles");
  const token = getAuthToken();
  if (!token) return [];

  const decodedToken = jwtDecode(token);
  console.log("from auth getUserRoles decodedToken", decodedToken);

  // Clean up roles to ensure no redundant prefix
  const cleanedRoles = (decodedToken.roles || []).map((role) => {
    // Remove redundant "ROLE_" prefix if it exists
    return role.replace(/^ROLE_+/, "");
  });
  
  console.log("userRoles", cleanedRoles);
  return cleanedRoles;
};
