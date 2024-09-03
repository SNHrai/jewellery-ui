import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaUser, FaChevronDown } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Logo from "../../util/images/logo.png"
import "./navbar.css" // We'll define some basic styling here

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(true)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen)
  }

  const navigationHandler = () => {
    navigate("/profile")
  }

  const handleClick = () => {
    navigate("/pricing")
  }

  return (
    <>
      <motion.nav className="navbar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="navbar-container">
          <div></div>
          <div className="m-auto d-flex navbar-logo ">
            {/* <img src={Logo} alt="logo" className="nav-logo-icon" /> */}
            <h1 className="m-auto logo-fonts ">AI Creration</h1>
          </div>
          <div className="navbar-actions">
            <button className="subscribe-button bg-[#7a4d35] p-2 rounded-md border-white " onClick={handleClick}>
              Subscribe
            </button>
            <div className=" user-icon" onClick={navigationHandler}>
              <FaUser className="user-img" />
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
      </motion.nav>
      {menuOpen ? (
        <nav className="navbar justify-content-center">
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <Link to="#" className="nav-link">
                Features <i className="fas fa-caret-down" />
              </Link>
              {dropdown && (
                <div className="dropdown-content">
                  <Link to="/service1" className="dropdown-link">
                    Create with Text
                  </Link>
                  <Link to="/service2" className="dropdown-link">
                    Create with Image
                  </Link>
                  <Link to="/service3" className="dropdown-link">
                    Create Image with Image
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/about" className="nav-link">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </nav>
      ) : (
        ""
      )}
    </>
  )
}

export default Navbar
