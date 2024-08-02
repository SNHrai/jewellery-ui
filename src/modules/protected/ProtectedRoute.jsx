// // components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { isAuthenticated, getUserRoles } from '../../util/handler/index';

// const ProtectedRoute = ({ children, requiredRoles }) => {
//   const location = useLocation();
  
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
  
//   const userRoles = getUserRoles();
//   console.log("userRoles", userRoles);
//   if (requiredRoles && requiredRoles.length > 0) {
//     const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
//     console.log("hasRequiredRole", hasRequiredRole);
//     if (!hasRequiredRole) {
//       return <Navigate to="/unauthorized" state={{ from: location }} replace />;
//     }
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, getUserRoles } from '../../util/handler/index';

const ProtectedRoute = ({ children, requiredRoles }) => {
  const location = useLocation();
  
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  const userRoles = getUserRoles();
  console.log("userRoles", userRoles);

  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
    console.log("hasRequiredRole", hasRequiredRole);
    if (!hasRequiredRole) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  }

  return children;
};

export default ProtectedRoute;


