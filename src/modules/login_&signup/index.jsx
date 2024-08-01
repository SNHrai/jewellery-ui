import React from "react";
import "./style.css";
import SignUp from "./SignUp";
import heroImage from "../../util/images/undraw_artificial_intelligence_re_enpp.svg";
function LoginAndSignUp() {
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
        {/* <div 
          className="inset-0 z-0 bg-black opacity-20"
          >

          </div> */}
        {/* <div className="flex-col items-center w-full px-20 mx-auto space-y-6">
        <h1 className="font-sans text-4xl font-bold text-white">Simple App</h1>
        <p className="mt-1 text-white">The simplest app to use</p>
        <div className="flex justify-center mt-6 lg:justify-start">
            <a href="#" className="px-4 py-2 mt-4 mb-2 font-bold text-indigo-800 transition-all duration-500 bg-white hover:bg-indigo-700 hover:text-white hover:-translate-y-1 rounded-2xl">Get Started</a>
        </div>
      </div> */}
      </div>

      <div className="flex items-center justify-center w-full space-y-8 lg:w-1/2">
        {/* px-8 md:px-32 lg:px-24 */}
        <div className="w-full ">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignUp;
