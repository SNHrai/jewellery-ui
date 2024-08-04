import React from "react";
import "./style.css";
import SignUp from "./SignUp";
import videoSource from "../../util/videos/VIDEO-2024-08-02-10-33-59.mp4";

function LoginAndSignUp() {
  return (
    <div className="flex h-screen" style={{marginTop:"-90px"}}>
      <div className="hidden lg:flex lg:w-1/2">
        <div className="relative w-full h-full">
          <video
            src={videoSource}
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="w-full">
          <SignUp /> 
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignUp;
