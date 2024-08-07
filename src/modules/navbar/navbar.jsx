import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../util/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const navigationHandler = () => {
    navigate("/profile");
  };

  const handleClick = () => {
    navigate("/pricing");
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="navbar-container">
        <div>
         
        </div>
        <div className="m-auto d-flex navbar-logo ">
        <img src={Logo} alt="logo" className="nav-logo-icon"/>
          <h1 className="m-auto logo-fonts "> EWEALITY</h1>
        </div>
        <div className="navbar-actions">
          <button className="subscribe-button bg-[#7a4d35] p-2 rounded-md border-white " onClick={handleClick}>
            Subscribe
          </button>
          <div className=" user-icon" onClick={navigationHandler}>
            <FaUser className="user-img"/>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <div className="cross-icon">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            ) : (
              <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <motion.div
        className={`navbar-links mt-4 ${menuOpen ? "open" : ""}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}>
        <a href="#">Home</a>
        <div className="features-dropdown">
          <a href="#" onClick={toggleFeatures} className="features-link">
            Features
            <FaChevronDown
              className={`transition-transform ${
                featuresOpen ? "rotate-180" : ""
              }`}
            />
          </a>
          <motion.div
            className={`sub-links ${featuresOpen ? "open" : ""}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: featuresOpen ? 1 : 0,
              height: featuresOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.5 }}>
            <a href="/dashboard">Create with Text</a>
            <a href="/dashboard">Create with Image</a>
            <a href="/dashboard">Create Image with Image</a>
          </motion.div>
        </div>
        <a href="/comingsoon">How it works</a>
        <a href="/comingsoon">Blogs</a>
        <a href="/comingsoon">About Us</a>
        <a href="/comingsoon">Contact Us</a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
