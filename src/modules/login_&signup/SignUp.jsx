import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./style.css"

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profession: "",
    country: "",
    phone:"",
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
      const response = await fetch("http://localhost:8080/api/auth/register", {
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
      localStorage.setItem("token", data.token);
      toast.success("User Authenticated Successfully");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error("Email is already in use!");
    } finally {
      setLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Use the access token to get user info from Google
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        if (res.status === 200) {
          const user = res.data;

          // Collect user details
          const userDetails = {
            idToken: response.access_token, // Use access token or idToken depending on your backend
            email: user.email,
            firstName: user.given_name,
            lastName: user.family_name,
            profilePic: user.picture, // Optional
          };

          // Send ID token and additional info to backend
          const googleResponse = await fetch(
            "http://localhost:8080/api/auth/google-login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userDetails),
            }
          );

          if (!googleResponse.ok) {
            throw new Error("Google login failed.");
          }

          const data = await googleResponse.json();
          localStorage.setItem("token", data.token);
          toast.success("User Authenticated Successfully");
          navigate("/dashboard");
        } else {
          throw new Error("Failed to fetch user info from Google.");
        }
      } catch (error) {
        console.error("Token Error:", error.message);
        toast.error(error.message);
      }
    },
    onError: (error) => {
      console.error("Login Error:", error);
      toast.error("Login failed.");
    },
  });

  // const handleGoogleSuccess = async (response) => {
  //   const { credential } = response; // This is the Google ID token

  //   try {
  //     // Decode the token to inspect its contents
  //     const decodedToken = jwtDecode(credential);
  //     console.log("Decoded Token:", decodedToken);

  //     // Check token expiration
  //     const currentTime = Math.floor(Date.now() / 1000);
  //     if (decodedToken.exp < currentTime) {
  //       throw new Error("Token has expired");
  //     }

  //     // Collect user details from decoded token
  //     const userDetails = {
  //       idToken: credential,
  //       email: decodedToken.email,
  //       firstName: decodedToken.given_name,
  //       lastName: decodedToken.family_name,
  //       profilePic: decodedToken.picture, // Optional
  //     };

  //     // Send ID token and additional info to backend
  //     const googleResponse = await fetch(
  //       "http://localhost:8080/api/auth/google-login",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(userDetails),
  //       }
  //     );

  //     if (!googleResponse.ok) {
  //       throw new Error("Google login failed.");
  //     }

  //     const data = await googleResponse.json();
  //     localStorage.setItem("token", data.token);
  //     toast.success("User Authenticated Successfully");
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Token Error:", error.message);
  //     toast.error(error.message);
  //   }
  // };

  // const handleGoogleFailure = (error) => {
  //   console.error("Google Login Failed", error);
  //   toast.error("Google Login Failed");
  // };

  const signupClickHandler = () => {
    console.log("clicked button login...");
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfefd] text-[#9d5e7b] relative">
      <div className="absolute flex items-center justify-end gap-2 top-2 right-3">
        <p className="mt-3 text-[#9d5e7b] custom-btn">
          Already have an account?
        </p>
        <button
          onClick={signupClickHandler}
          className="px-4 custom-btn py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
          Login
        </button>
      </div>

      <div className="w-full max-w-lg p-8 bg-[#fdfefd] rounded-lg ">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#9d5e7b]">
          Sign Up
        </h2>
        <div className="flex flex-col items-center mb-6">
          <button
            onClick={() => login()}
            className="flex items-center justify-center w-full py-2 mb-4 text-white bg-[#9d5e7b] rounded-md form-signup-custom hover:bg-[#b59481]">
            <FcGoogle size={24} className="mr-2" />
            Continue with Google
          </button>

          <button className="flex items-center justify-center w-full py-2 text-white bg-[#9d5e7b] rounded-md form-signup-custom hover:bg-blue-950">
            <FaLinkedinIn size={22} className="mr-2" />
            Continue with LinkedIn
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
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              />
            </div>
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
                className="w-full px-4 py-2 form-field-custom text-[#9d5e7b] bg-[#fdfefd] rounded-md border-[#b59481] border"
              >
                <option value="" disabled>Select Profession</option>
                <option value="Cinematic">Cinematic</option>
                <option value="Photographic">Photographic</option>
                <option value="3D Models">3D Models</option>
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
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              className="form-checkbox-custom"
            />
            <label htmlFor="termsAccepted" className="ml-2 text-[#9d5e7b] form-login-field-custom">
              I accept the{" "}
              <a href="/terms" className="text-[#b59481] hover:underline form-login-field-custom">
                terms and conditions
              </a>
            </label>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            type="submit"
            className={`w-full py-2 form-signup-custom text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );

};

export default SignUp;
