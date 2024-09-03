import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import LoginAndSignUp from "./modules/login_&signup/index.jsx";
import ProtectedRoute from "./modules/protected/ProtectedRoute.jsx";
import UserDashboard from "./modules/dashboard/Dashboard.jsx";
import AuthenticatePage from "./modules/auth_page/AuthenticatePage.jsx";
import Pricing from "./modules/pricing/pricing.jsx";
import Home from "./modules/home/home.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgotPassword from "./modules/forgot_password/ForgotPassword.jsx";
import Profile from "./modules/profile/Profile.jsx";
import ComingSoonPage from "./modules/page/ComingSoonPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { UserProvider } from "./context/user.jsx";
import HistoryDashboard from "./modules/history/HistoryDashboard.jsx";
import ErrorPage from "./modules/page/ErrorPage.jsx";
import HistoryDetails from "./modules/history/HistoryDetails.jsx";
import PaymentPage from "./modules/pricing/PaymentPage.jsx";
import AdminDashboard from "./modules/admin-dashboard/AdminDashboard.jsx";

function Main() {
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginAndSignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <LoginAndSignUp />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute requiredRoles={["ROLE_USER"]}>
          <UserDashboard />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/unauthorized",
      element: <AuthenticatePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/comingsoon",
      element: <ComingSoonPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/history-dashboard",
      element: <HistoryDashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/history-details/:id",
      element: <HistoryDetails />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/payment-page",
      element: (
        <ProtectedRoute requiredRoles={["ROLE_USER"]}>
          <PaymentPage />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin-dashboard",
      element: (
        <ProtectedRoute requiredRoles={["ROLE_USER"]}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <Provider store={store}>
          <UserProvider>
            <GoogleOAuthProvider clientId="104704098738-d9t0nqvhfubvhjp1lk8rnchbifhq5dtl.apps.googleusercontent.com">
              <Toaster />
              <RouterProvider router={router} />
            </GoogleOAuthProvider>
          </UserProvider>
        </Provider>
      </React.StrictMode>
    </Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
