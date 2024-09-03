// import React from 'react';
// import { Sidebar, Menu, MenuItem, Submenu } from 'react-mui-sidebar';
// import { motion } from 'framer-motion';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import "./sidebar.css"

// // Define the theme for Material-UI
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ffffff',
//     },
//     text: {
//       primary: '#000000',
//     },
//   },
// });

// function SidebarComponent() {
//   return (
//     <ThemeProvider theme={theme}>
//       <motion.div
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Sidebar width="270px">
//           <Menu subHeading="MAIN">
//             <MenuItem className="menu-item">Home</MenuItem>
//             <Submenu title="Creation">
//               <MenuItem className="menu-item">Option 1</MenuItem>
//               <MenuItem className="menu-item">Option 2</MenuItem>
//             </Submenu>
//           </Menu>
//         </Sidebar>
//       </motion.div>
//     </ThemeProvider>
//   );
// }

// export default SidebarComponent;

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

// Custom CSS (you can include this in your CSS file)
import "./sidebar.css"

function Sidebar() {
  return (
    <div className="w-64 h-full  flex flex-col">
      <div className="p-6 flex items-center ">
        <div className="text-2xl font-bold text-gray-800">Main</div>
      </div>
      <div className="flex-grow">
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="sidebar-link">
                <span className="material-icons">home</span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="sidebar-link">
                <span className="material-icons">person</span>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="sidebar-link">
                <span className="material-icons">settings</span>
                Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" className="sidebar-link">
                <span className="material-icons">logout</span>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-6 border-t border-gray-300">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-[#ffffff]"
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
