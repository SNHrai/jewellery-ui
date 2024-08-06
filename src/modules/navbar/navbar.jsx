import React, { useState } from "react";
import "./navbar.css";
import JewealityLogo from "../../util/images/JewealityLogoWhite.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo-img">
          <img src={JewealityLogo} alt="Jeweality Logo" style={{ width: "100px" }} />
        </div>
        <div className="navbar-logo-text">
          <h1 className="navbar-logo">JEWEALITY</h1>
          <span>where imagination meets reality</span>
        </div>
        <div className="menu-icon">
          {menuOpen ? (
            <div className="cross-icon" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          ) : (
            <div className="hamburger" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;
