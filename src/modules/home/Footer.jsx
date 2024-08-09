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

  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/login")
  }
  const handleSignup = (e) => {
    e.preventDefault()
    navigate("/signup")
  }

  const handleClick = (e) =>{
    e.preventDefault()
    navigate("/pricing")
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-subscribe d-flex">
          <h4>Subscribe to our news</h4>
          <div className="subscribe">
            <button type="button">Subscribe</button>
          </div>
        </div> */}
        <div className="col-lg-8 col-sm-6">
          <div className="footer-subscribe d-flex">
            {" "}
            {/* <span className="icon feature_box_col_three">
              <img className="jewwllery-icon" src={RevolutionDesign} alt="" />
            </span> */}
            <h4>Don’t miss to subscribe.</h4>
            {/* <p>At Jeweality, we've transformed jewelry design by using advanced AI technology. Our platform helps designers turn their ideas into detailed and beautiful jewelry designs in seconds. Say goodbye to long and complicated design processes and embrace a new era of creativity and innovation.</p> */}
            <div className="subscribe">
              <button type="button" onClick={handleClick}>Subscribe</button>
            </div>
          </div>
        </div>
        {/* <h2 className="footer-title">Footer</h2> */}
        {/* <div className="col-lg-12 footer-title d-flex">
          <h2>Jeweality</h2>
        </div> */}
        <div className="footer-sections">
          <div className="footer-column">
            <b>
              <h4>USEFUL LINKS</h4>
            </b>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>FOLLOW US ON</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>WAYS TO USE APPLICATIONS</h4>
            <div className="flex-row gap-3 d-flex">
              <button className="w-24 p-3 ml-3 rounded-lg h-14 subscribe-button" onClick={handleLogin}>Login</button>
              <div>
                <h4>OR</h4>
              </div>
              <button className="w-24 ml-3 rounded-lg h-14 subscribe-button" onClick={handleSignup}>Sign-Up</button>
            </div>
          </div>
        </div>
        <div className="container-signup follow-us-link">
            <div className="d-flex" style={{marginLeft:"-100px"}}>
              <img src={FaceBook} alt="Jewellery We App" />
              <img src={Twitter} alt="Jewellery We App" />
              <img src={Instagram} alt="Jewellery We App" />
              <img src={Youtube} alt="Jewellery We App" />
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
      </div>
    </footer>
  )
}

export default Footer
