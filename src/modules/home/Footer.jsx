import React from "react"
import Location from "../../util/images/location.png"
import Contact from "../../util/images/phone.png"
import MailBox from "../../util/images/mailbox.png"
import FaceBook from "../../util/images/facebook.png"
import Twitter from "../../util/images/twitter.png"
import SubmitButton from "../../util/images/submit.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex">
                <img src={Location} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, Chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex">
                {/* <FontAwesomeIcon icon={faPhone} /> */}
                <img src={Contact} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta d-flex">
                {/* <FontAwesomeIcon icon={faEnvelopeOpen} /> */}
                <img className="mail-footer" src={MailBox} alt="Jewellery We App" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">{/* <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a> */}</div>
                <div className="footer-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <div className="d-flex">
                  <img src={FaceBook} alt="Jewellery We App" />
                  <img src={Twitter} alt="Jewellery We App" />
                  <img src={FaceBook} alt="Jewellery We App" />
                  </div>
                  {/* <a href="#"><FontAwesomeIcon icon={faFacebookF} className="facebook-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className="twitter-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faGooglePlusG} className="google-bg" /></a> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#" className="footer-form">
                    <input type="text" placeholder="Email Address" />
                    <div className="email-footer">
                    <img src={SubmitButton} alt="Jewellery We App" />
                    </div>
                    {/* <button><FontAwesomeIcon icon={faTelegramPlane} /></button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
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
