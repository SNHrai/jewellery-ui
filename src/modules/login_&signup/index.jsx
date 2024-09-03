import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import SignUp from "./SignUp";
import videoSource from "../../util/images/Leonardo_Phoenix_A_highly_detailed_and_realistic_illustration_2.jpg";
import Login from "./Login";

function LoginAndSignUp() {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("signup")) {
      setShowLogin(false);
    } else if (location.pathname.includes("login")) {
      setShowLogin(true);
    }
  }, [location.pathname]);

  const signupClickHandler = () => {
    setShowLogin(false);
  };

  const loginClickHandler = () => {
    setShowLogin(true);
  };

  return (
    <div className="flex h-screen ">
      <div className="hidden lg:flex lg:w-1/2 ">
        <div className="relative ">
          <img src={videoSource} alt={"image"} className=""/>
          {/* <video
            src={videoSource}
            autoPlay
            loop
            muted
            className="absolute w-full h-full"
          /> */}
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full">
          <div
            className={`transition-opacity duration-500 ${
              showLogin ? "opacity-100" : "opacity-0"
            }`}
          >
            <Login />
          </div>
          <div
            className={`transition-opacity duration-500 ${
              showLogin ? "opacity-0" : "opacity-100"
            }`}
          >
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignUp;
