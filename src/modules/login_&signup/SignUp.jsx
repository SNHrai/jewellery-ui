import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profession: "",
    country: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed.");
      }

      const data = await response.json();
      try {
        localStorage.setItem("token", data.token); // Assuming token is returned in the response
        toast.success("User Authenticated Successfully");
        navigate("/dashboard");
      } catch (e) {
        if (e.name === "QuotaExceededError") {
          setError(
            "Storage quota exceeded. Please clear some space or try again later."
          );
          toast.error(
            "Storage quota exceeded. Please clear some space or try again later."
          );
        } else {
          throw e;
        }
      }
    } catch (err) {
      setError(err.message);
      toast.error("Email is already in use!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfefd] text-[#9d5e7b] relative">
      <div className="absolute flex items-center justify-end gap-2 top-2 right-3">
        <p className="mt-3 text-[#9d5e7b] custom-btn">Already have an account?</p>
        <Link
          to="/login"
          className="px-4 custom-btn py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
          Login
        </Link>
      </div>

      <div className="w-full max-w-lg p-8 bg-[#fdfefd] rounded-lg ">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#9d5e7b]">Sign Up</h2>
        <div className="flex flex-col items-center mb-6">
          <button className="flex form-signup-custom  items-center justify-center w-full py-2 mb-4 text-white bg-[#9d5e7b] rounded-md hover:bg-[#b59481]">
            <FcGoogle size={24} className="mr-2" />
            Continue with Google
          </button>
          <button className="flex form-signup-custom  items-center justify-center w-full py-2 text-white bg-[#000] rounded-md hover:bg-gray-800">
            <FaApple size={24} className="mr-2" />
            Continue with Apple
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-full h-px bg-[#9d5e7b]"></div>
          <span className="mx-4 text-[#9d5e7b]">or</span>
          <div className="w-full h-px bg-[#9d5e7b]"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
            />
          </div>
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border">
                <option value="">Profession</option>
                <option value="Designer">Designer</option>
                <option value="Sales">Sales</option>
                <option value="Founder">Founder</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              className="mr-2 text-[#9d5e7b] focus:ring-[#9d5e7b]"
            />
            <label htmlFor="termsAccepted" className="text-sm text-[#9d5e7b]">
              I accept the terms and conditions
            </label>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="relative custom-btn w-full py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
            <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
              Sign Up
            </span>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
