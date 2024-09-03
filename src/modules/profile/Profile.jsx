import React, { useState } from "react";
import { FaImages, FaCoins, FaBusinessTime, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./Profile.css";

// Card Styled Component
const Card = styled(motion.div)`
  background-color: #fdfefd;
  padding: 24px;
  border-radius: 8px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  /* border: 2px solid #ebdfd8; */
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  /* width: 300px; */
  text-align: center;
  background-color: #ebdfd8;

  &:hover {
    border-color: #9d5e7b;
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("AI Creation");

  const userInfo = {
    firstName: "John",
    lastName: "Doe",
    mobileNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    country: "United States",
    profession: "Software Engineer",
    imagesGenerated: 125,
    leftTokens: 50,
    plan: "Business",
  };

  const onClickHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#fdfefd] flex flex-col items-center py-12">
      <div className="relative flex flex-col items-center w-full max-w-md p-8 shadow-xl rounded-3xl profile-card">
        <div className="mb-6 text-center">
          <h4 className="text-2xl font-bold text-gray-900 form-labels">
            {userInfo.firstName} {userInfo.lastName}
          </h4>
          <p className="text-lg text-gray-500 form-labels-data">
            {userInfo.profession}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveSection("AI Creation")}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${activeSection === "AI Creation" ? "bg-[#9d5e7b] text-white" : "bg-white text-[#9d5e7b] hover:bg-[#ebdfd8]"}`}
          >
            AI Creation
          </button>
          <button
            onClick={() => setActiveSection("Contact Information")}
            className={`px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${activeSection === "Contact Information" ? "bg-[#9d5e7b] text-white" : "bg-white text-[#9d5e7b] hover:bg-[#ebdfd8]"}`}
          >
            Contact Information
          </button>
        </div>

        {/* AI Creation Section */}
        {activeSection === "AI Creation" && (
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h5 className="text-lg font-semibold text-[#9d5e7b] mb-4 form-labels">
              AI Creation
            </h5>
            <div className="flex items-center mb-4 text-gray-700 form-labels-data">
              <FaImages className="mr-2 text-[#9d5e7b]" />
              Number of Images Generated: {userInfo.imagesGenerated}
            </div>
            <div className="flex items-center mb-4 text-gray-700 form-labels-data">
              <FaCoins className="mr-2 text-[#9d5e7b]" />
              Left Tokens: {userInfo.leftTokens}
            </div>
            <div className="flex items-center mb-4 text-gray-700 form-labels-data">
              <FaBusinessTime className="mr-2 text-[#9d5e7b]" />
              Plan: {userInfo.plan}
            </div>
          </Card>
        )}

        {/* Contact Information Section */}
        {activeSection === "Contact Information" && (
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h5 className="text-lg font-semibold text-[#9d5e7b] mb-4 form-labels">
              Contact Information
            </h5>
            <div className="flex items-center mb-4 text-gray-700 form-labels-data">
              <FaPhoneAlt className="mr-2 text-[#9d5e7b]" />
              {userInfo.mobileNumber}
            </div>
            <div className="flex items-center mb-4 text-gray-700 form-labels-data">
              <FaEnvelope className="mr-2 text-[#9d5e7b]" />
              {userInfo.email}
            </div>
            <div className="flex items-center text-gray-700 form-labels-data">
              <FaGlobe className="mr-2 text-[#9d5e7b]" />
              {userInfo.country}
            </div>
          </Card>
        )}

        <button
          onClick={onClickHandler}
          className="mt-8 px-6 py-2 bg-[#9d5e7b] text-white font-semibold rounded-full shadow-md hover:bg-[#ebdfd8] hover:text-[#9d5e7b] transition-all duration-300 custom-btn button-fonts"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
