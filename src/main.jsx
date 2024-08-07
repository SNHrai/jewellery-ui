import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import LoginAndSignUp from "./modules/login_&signup/index.jsx";
import Login from "./modules/login_&signup/Login.jsx";
import SignUp from "./modules/login_&signup/SignUp.jsx";
import ProtectedRoute from "./modules/protected/ProtectedRoute.jsx";
import UserDashboard from "./modules/dashboard/Dashboard.jsx";
import AuthenticatePage from "./modules/auth_page/AuthenticatePage.jsx";
import Pricing from "./modules/pricing/pricing.jsx";
import Home from "./modules/home/home.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgotPassword from "./modules/forgot_password/ForgotPassword.jsx";
import Profile from "./modules/profile/Profile.jsx";
import ComingSoonPage from "./modules/page/ComingSoonPage.jsx";

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/login",
      element: <LoginAndSignUp />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/signup",
      element: <LoginAndSignUp />,
      errorElement: <div>Error</div>,
    },
    
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute requiredRoles={['ROLE_USER']}>
          <UserDashboard />
        </ProtectedRoute>
      ),
      errorElement: <AuthenticatePage />,
    },
    {
      path: "/unauthorized",
      element: <AuthenticatePage />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/pricing",
      element: <Pricing />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/comingsoon",
      element: <ComingSoonPage />,
      errorElement: <div>Error</div>,
    }
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <GoogleOAuthProvider clientId="104704098738-d9t0nqvhfubvhjp1lk8rnchbifhq5dtl.apps.googleusercontent.com">
          <Toaster />
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </React.StrictMode>
    </Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
