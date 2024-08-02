// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faTimes,
//   faChevronDown,
//   faSignOutAlt,
//   faDashboard,
//   faRobot,
//   faCommentDots,
//   faHistory,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { useUser } from "../../context/user";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const user = useUser();
//   const location = useLocation();
//   const [isUserDashboardOpen, setIsUserDashboardOpen] = useState(false);

//   const isActiveRoute = (route) => location.pathname === route;

//   const toggleUserDashboardMenu = () => {
//     setIsUserDashboardOpen(!isUserDashboardOpen);
//   };

//   const handleLogout = () => {
//     // Add your logout logic here
//     console.log("Logout clicked");
//   };

//   return (
//     <div className="relative z-10">
//       <button
//         type="button"
//         className="fixed z-50 inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm top-4 left-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         onClick={toggleSidebar}
//       >
//         <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
//       </button>

//       <div
//         className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col p-4 mt-5 space-y-4">
//           <NavLink
//             to="/admin-dashboard"
//             className={` px-4 py-2 rounded-md text-decoration-none flex items-center ${
//               isActiveRoute("/admin-dashboard")
//                 ? "bg-indigo-500 text-white"
//                 : "bg-indigo-600 text-white hover:bg-indigo-700"
//             } transition-colors duration-300`}
//           >
//             <FontAwesomeIcon icon={faDashboard} className="mr-2" />
//             Admin Dashboard
//           </NavLink>
//           <div className="relative">
//             <button
//               type="button"
//               className={`flex items-center justify-between w-full px-4 py-2 rounded-md text-decoration-none ${
//                 isActiveRoute("/user-dashboard") ||
//                 isActiveRoute("/ai-creation") ||
//                 isActiveRoute("/prompt-generation") ||
//                 isActiveRoute("/creation-history")
//                   ? "bg-indigo-500 text-white"
//                   : "bg-indigo-600 text-white hover:bg-indigo-700"
//               } transition-colors duration-300`}
//               onClick={toggleUserDashboardMenu}
//             >
//               <span className="flex items-center">
//                 <FontAwesomeIcon icon={faUser} className="mr-2" />
//                 User Dashboard
//               </span>
//               <FontAwesomeIcon
//                 icon={faChevronDown}
//                 className={`ml-2 transition-transform duration-300 ${
//                   isUserDashboardOpen ? "transform rotate-180" : ""
//                 }`}
//               />
//             </button>
//             <div
//               className={`absolute left-0 mt-2 w-full bg-gray-800 rounded-md overflow-hidden transition-all duration-300 ${
//                 isUserDashboardOpen ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <div
//                 className={`h-full w-1 bg-indigo-500 transition-all duration-300 ${
//                   isUserDashboardOpen ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//               <div
//                 className={`transition-all duration-300 ${
//                   isUserDashboardOpen
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 -translate-y-4"
//                 }`}
//               >
//                 <NavLink
//                   to="/ai-creation"
//                   className={`block px-4 py-2 hover:bg-indigo-700 text-white transition-colors duration-300 text-decoration-none flex items-center ${
//                     isActiveRoute("/ai-creation") ? "bg-indigo-700" : ""
//                   }`}
//                 >
//                   <FontAwesomeIcon icon={faRobot} className="mr-2" />
//                   AI Creation
//                 </NavLink>
//                 <NavLink
//                   to="/prompt-generation"
//                   className={`block px-4 py-2 hover:bg-indigo-700 text-white transition-colors duration-300 text-decoration-none flex items-center ${
//                     isActiveRoute("/prompt-generation") ? "bg-indigo-700" : ""
//                   }`}
//                 >
//                   <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
//                   Prompt Generation
//                 </NavLink>
//                 <NavLink
//                   to="/creation-history"
//                   className={`block px-4 py-2 hover:bg-indigo-700 text-white transition-colors duration-300 text-decoration-none flex items-center ${
//                     isActiveRoute("/creation-history") ? "bg-indigo-700" : ""
//                   }`}
//                 >
//                   <FontAwesomeIcon icon={faHistory} className="mr-2" />
//                   Creation History
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-4 left-4">
//           <button
//             className="flex items-center px-4 py-2 text-white transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700"
//             onClick={() => user.logout()}
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
