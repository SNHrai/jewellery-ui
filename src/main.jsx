// Main.jsx
import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserProvider } from './context/user.jsx';
import { Toaster } from 'sonner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import UserDashboard from './components/user-dashboard/UserDashboard.jsx';
import AdminDashboard from './components/admin-dashboard/AdminDashboard.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import AiCreation from './components/ai-creation/AiCreation.jsx';
import LoginAndSignUp from './modules/login_&signup/index.jsx';
import Login from './modules/login_&signup/Login.jsx';
import SignUp from './modules/login_&signup/SignUp.jsx';
import ProtectedRoute from './modules/protected/ProtectedRoute.jsx'; // Import the ProtectedRoute component

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginAndSignUp />,
      errorElement: <div>Error</div>,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <div>Error</div>,
    },
    {
      path: '/signup',
      element: <SignUp />,
      errorElement: <div>Error</div>,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <Dashboard />
          </Sidebar>
        </ProtectedRoute>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: '/user-dashboard',
      element: (
        <ProtectedRoute requiredRoles={['ROLE_USER']}>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <UserDashboard />
          </Sidebar>
        </ProtectedRoute>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: '/admin-dashboard',
      element: (
        <ProtectedRoute requiredRoles={['ROLE_ADMIN']}>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <AdminDashboard />
          </Sidebar>
        </ProtectedRoute>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: '/ai-creation',
      element: (
        <ProtectedRoute>
          <AiCreation />
        </ProtectedRoute>
      ),
      errorElement: <div>Error</div>,
    },
    {
      path: '/unauthorized',
      element: <div>Unauthorized</div>,
      errorElement: <div>Error</div>,
    }
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

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

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
