import React from "react";
import unauthorizedImage from "../../util/images/401 Error Unauthorized-rafiki.svg";
import { useNavigate } from "react-router-dom";

const AuthenticatePage = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={unauthorizedImage}
            alt="401 Unauthorized"
            className="w-48 h-48 mb-6"
          />
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Unauthorized Access
          </h1>
          <p className="mb-6 text-center text-gray-600">
            You are not authorized to access this page. Please log in or sign up
            to continue.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" onClick={() => navigate("/login")}>
              Log In
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" onClick={() => navigate("/")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePage;
