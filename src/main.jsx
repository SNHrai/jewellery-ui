import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/user.jsx";
import { Toaster } from "sonner";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import UserDashboard from "./components/user-dashboard/UserDashboard.jsx";
import AdminDashboard from "./components/admin-dashboard/AdminDashboard.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import AiCreation from "./components/ai-creation/AiCreation.jsx";

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <App />
        // </Sidebar>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: "/dashboard",
      element: (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
          <Dashboard />
        </Sidebar>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: "/ai-creation",
      element: <AiCreation />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/admin-dashboard",
      element: (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
          <AdminDashboard />
        </Sidebar>
      ),
      errorElement: <div>Error</div>,
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <Toaster />
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </React.StrictMode>
    </Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Suspense fallback={<div>Loading...</div>}>
//     <React.StrictMode>
//       <Toaster />
//       <UserProvider>
//         <RouterProvider router={router} />
//       </UserProvider>
//     </React.StrictMode>
//   </Suspense>
// );
