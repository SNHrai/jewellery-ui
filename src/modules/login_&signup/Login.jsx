import React, { useState } from "react";
import "./style.css";
import heroImage from "../../util/images/undraw_artificial_intelligence_re_enpp.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex h-screen">
      <div className="items-center  h-screen justify-around hidden w-full m-auto align-items-center lg:flex lg:w-1/2 bg-gradient-to-r from-[#6C63FF] to-[#2f2e41]">
        <div>
          <img
            src={heroImage}
            alt="image"
            className="m-auto"
            style={{ width: "70%", height: "70%" }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full space-y-8 lg:w-1/2">
        {/* px-8 md:px-32 lg:px-24 */}
        <div className="w-full ">
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#161920] text-white">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md">
              <h2 className="mb-6 text-3xl font-bold text-center custom-btn">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    // className="w-full form-field-custom px-4 py-2 text-white bg-[#161920] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    className="w-full px-4 form-field-custom  py-2 text-white bg-[#161920] rounded-md border-gray-200"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    // className="w-full form-field-custom px-4 py-2 text-white bg-[#161920] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    className="w-full px-4 form-field-custom  py-2 text-white bg-[#161920] rounded-md border-gray-200"
                  />
                </div>
                <div className="flex justify-between mb-6">
                  <div>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="mr-2 text-blue-500 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-gray-400">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white rounded-md custom-btn bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Login
                </button>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-400">
                    Don't have an account?{" "}
                  </span>
                  <Link
                    to="/"
                    className="ml-2 text-sm text-blue-500 custom-btn hover:text-blue-600">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
