import React, { useState, useEffect } from 'react';
import './navbar.css'; // Import the CSS file
import { FaBars, FaTimes } from 'react-icons/fa';
// import JewellwryIcon from "../../util/images/pearl-necklace.png";
import JewellwryIcon from "../../util/images/JewealityLogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50); // Adjust the scroll position threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
    <div className='navbar-section'>
     <img src={JewellwryIcon} className="navbar-logo" alt="Logo"/>
    </div>
      <div className="navbar-hamburger" onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="/" className="navbar-menu-item">Home</a>
        <a href="/about" className="navbar-menu-item">About Us</a>
        <a href="/contact" className="navbar-menu-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
