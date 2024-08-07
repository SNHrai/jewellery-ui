import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import JewealityLogo from "../../util/images/JewealityLogoWhite.png";
import DownArrow from "../../util/images/down-arrow.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  
  const handleClick = (e) =>{
    e.preventDefault()
    navigate("/pricing")
  }

  return (
    <motion.nav
      className="navbar p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="navbar-header d-flex justify-between w-full">
        <div className="navbar-logo-img">
          {/* <img
            src={JewealityLogo}
            alt="Jeweality Logo"
            style={{ width: "100px" }}
          /> */}
        </div>
        <div className="navbar-logo-text">
          <h1 className="navbar-logo logo-fonts">JEWEALITY</h1>
          <span className="custom-btn">where imagination meets reality</span>
        </div>
        <div className="d-flex flex-row gap-3">
          <button className="subscribe-button ml-3" onClick={handleClick}>
            Subscribe
          </button>
          <div className="d-flex justify-center align-items-center fs-4 cursor-pointer" onClick={navigationHandler}>
            <FaUser />
          </div>
          <div
            className="menu-icon d-flex justify-center align-items-center"
            onClick={toggleMenu}>
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
      <hr />
      <motion.div
        className={`navbar-links ${menuOpen ? "open" : ""}`}
        initial={{ maxHeight: 0 }}
        animate={{ maxHeight: menuOpen ? 300 : 0 }}
        transition={{ duration: 0.5 }}>
        <a href="#">HOME</a>
        <a href="#!">Services</a>
          <ul class="nav-dropdown">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
            </li>
          </ul>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT US</a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
