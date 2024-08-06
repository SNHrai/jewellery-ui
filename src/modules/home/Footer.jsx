import React from "react"
import Location from "../../util/images/location.png"
import Contact from "../../util/images/phone.png"
import MailBox from "../../util/images/mailbox.png"
import FaceBook from "../../util/images/facebook.png"
import Twitter from "../../util/images/twitter.png"
import Instagram from "../../util/images/instagram.png"
import Youtube from "../../util/images/youtube.png"
import SubmitButton from "../../util/images/submit.png"
import "./footer.css"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/pricing")
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/login")
  }
  const handleSignup = (e) => {
    e.preventDefault()
    navigate("/signup")
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="pt-5 pb-5 footer-cta">
          <div className="row">
            {/* <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex">
                <img src={Location} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, Chandigarh</span>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex"> */}
            {/* <FontAwesomeIcon icon={faPhone} /> */}
            {/* <img src={Contact} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex"> */}
            {/* <FontAwesomeIcon icon={faEnvelopeOpen} /> */}
            {/* <img className="mail-footer" src={MailBox} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="pt-5 pb-5 footer-content">
          <div className="row">
            {/* <div className="col-xl-4 col-lg-4 mb-30">
              <div className="footer-widget">
                <div className="footer-logo"></div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <div className="d-flex">
                    <img src={FaceBook} alt="Jewellery We App" />
                    <img src={Twitter} alt="Jewellery We App" />
                    <img src={FaceBook} alt="Jewellery We App" />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Follow Us On</h3>
                </div>
                <div className="container-signup follow-us-link">
                  <div className="d-flex">
                    <img src={FaceBook} alt="Jewellery We App" />
                    <img src={Twitter} alt="Jewellery We App" />
                    <img src={Instagram} alt="Jewellery We App" />
                    <img src={Youtube} alt="Jewellery We App" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading" style={{paddingTop:"45px"}}>
                  <h3>Useful Links</h3>
                </div>
                <ul className="d-grid">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Ways to use our Application</h3>
                </div>
                <div className="container-signup">
                  <div className="d-flex" >
                    <button className="log">Login</button>
                    <button className="reg">Sign up</button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Ways to use our Application</h3>
                </div>
                <div className="d-flex">
                  <div className="container-signup">
                    <div className="subscribe-form footer-sign-up">
                      <a className="btn" onClick={handleLogin}>
                        "Login"
                      </a>
                    </div>
                  </div>
                  <h3 style={{ paddingTop: "35px", paddingLeft: "10px", paddingRight: "10px" }}>OR</h3>
                  <div className="container-signup footer-sign-up">
                    <div className="subscribe-form">
                      <a className="btn" onClick={handleLogin}>
                        "sign-up"
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget" style={{marginLeft:"100px"}}>
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe.</p>
                </div>
                <div className="subscribe-form">
                  <a className="btn" onClick={handleSubmit}>
                    "Subscribe Here"
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget" style={{ marginTop: "20px" }}>
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="container-signup footer-sign-up">
                  <div className="subscribe-form">
                    <a className="btn" onClick={handleSubmit}>
                      "Subscribe Here"
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-xl-6 col-lg-6 text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved <a href="https://codepen.io/anupkumar92/">《JEWEALITY》</a> (where imagination meets reality)
                </p>
              </div>
            </div>
            <div className="text-center col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
