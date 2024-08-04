import React, { useState } from "react";
import "./style.css";
import SignUp from "./SignUp";
import videoSource from "../../util/videos/VIDEO-2024-08-02-10-33-59.mp4";
import Login from "./Login";


function LoginAndSignUp() {
  const [showLogin, setShowLogin] = useState(true);

  const signupClickHandler = () => {
    setShowLogin(true);
  };

  const loginClickHandler = () => {
    setShowLogin(false);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#c8b38f] to-[#c4a770]">
        <div className="relative w-full h-full">
          <video
            src={videoSource}
            autoPlay
            loop
            muted
            className="absolute w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full">
          <div
            className={`transition-opacity duration-500 ${
              showLogin ? "opacity-100" : "opacity-0"
            }`}
          >
            <Login loginClickHandler={loginClickHandler} />
          </div>
          <div
            className={`transition-opacity duration-500 ${
              showLogin ? "opacity-0" : "opacity-100"
            }`}
          >
            <SignUp signupClickHandler={signupClickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignUp;
