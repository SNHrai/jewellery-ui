import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../util/handler";
import { toast } from "sonner";
import "./style.css"

function Login({ loginClickHandler }) {
  const [showEmail, setShowEmail] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();
      setAuthToken(data.token);
      toast.success("User Logged in Successfully");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleInputField = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="flex justify-center h-screen d-flex align-items-center">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full max-w-lg p-8 bg-[#fdfefd] rounded-lg ">
          <div className="absolute flex items-center justify-end gap-2 top-2 right-3">
            <p className="mt-3 text-[#9d5e7b] custom-btn">
              Don't have an account?
            </p>
            <button
              onClick={loginClickHandler}
              className="px-4 py-2 custom-btn text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
              Sign Up
            </button>
          </div>
          <h2 className="mb-6 custom-btn text-3xl font-bold text-center text-[#9d5e7b]">
            Login
          </h2>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="flex items-center mb-4">
            <div
              className={`transition-all duration-500 ${
                showEmail ? "opacity-0 -translate-x-full" : "opacity-100"
              }`}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 custom-input-style py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
            <div
              className={`transition-all duration-500 ${
                showEmail
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 custom-input-style form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
            <button
              onClick={toggleInputField}
              className="ml-4 px-4 py-2 custom-btn text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
              {showEmail ? "Phone" : "Email"}
            </button>
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 custom-input-style form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
            />
          </div>
          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleCheckboxChange}
                className="mr-2 text-[#9d5e7b] focus:ring-[#9d5e7b]"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-[#9d5e7b] form-login-field-custom">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-[#9d5e7b] hover:underline form-login-field-custom">
              Forgot password?
            </a>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            onClick={handleSubmit}
            type="submit"
            className={`w-full py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? "login..." : "Log in"}
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
