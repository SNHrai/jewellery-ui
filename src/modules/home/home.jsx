import React, {useState} from "react"
import Navbar from "../navbar/navbar"
import Crousel from "./crousel"
import "./home.css"
import GroupIcon from "../../util/images/multiple-users-silhouette.png"
import Clock from "../../util/images/clock.svg"
import Code from "../../util/images/code.svg"
import Eye from "../../util/images/eye.svg"
import SpeedoMeter from "../../util/images/speedometer.svg"
import ThumbsUpIcon from "../../util/images/thumbs-up.svg"
import RevolutionDesign from "../../util/images/revolution-design.png"
import WorldClassDesign from "../../util/images/world-class-jewel.png"
import Infinity from "../../util/images/infinity.png"
import Easy from "../../util/images/easy.png"
import LeadInnovation from "../../util/images/lead-innovation.png"
import Carousel from "./CarouselComponent"
import OurReview from "./ReviewSection"
import GifSection from "./GifSection"
import Contact from "./contact"
import Footer from "./Footer"
import RatingWidget from "./RatingWidget"
import { useNavigate } from "react-router-dom"

function Home() {
  const [showReview, setShowReview] = useState(false)
  const navigate = useNavigate();

  const toggleReview = () => {
    setShowReview(!showReview)
  }

  const onClickHandler = () => {
    navigate("/dashboard");
  }

  return (
    <div>
      <Navbar />
      <Crousel />
      <Carousel />
      <GifSection />
      <div className="pt-5 pb-5 feat bg-gray">
        <div className="sub-main">
          <button className="button-two subscribe-button" onClick={onClickHandler}>
            <span>Explore</span>
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4>
                <span>Why Choose</span> Us?
              </h4>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_three">
                  <img className="jewwllery-icon" src={RevolutionDesign} alt="" />
                </span>
                <h6>Jewelry Design Revolutionized</h6>
                <p>At Jeweality, we've transformed jewelry design by using advanced AI technology. Our platform helps designers turn their ideas into detailed and beautiful jewelry designs in seconds. Say goodbye to long and complicated design processes and embrace a new era of creativity and innovation.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_two">
                  <img className="jewwllery-icon" src={Easy} alt="" />
                </span>
                <h6>Easy to Use</h6>
                <p>Jeweality is made for you. Our easy-to-use interface means anyone can create beautiful jewelry designs without needing technical skills. Just input your ideas, and our AI will bring them to life, making the design process simple and enjoyable.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                  <img className="jewwllery-icon" src={WorldClassDesign} alt="" />
                </span>
                <h6>World-Class Designs</h6>
                <p>Jeweality is more than just a tool; we're your creative partner. Our platform supports and enhances your design journey, giving you the resources and inspiration to bring your best ideas to life. Trust Jeweality to be with you every step of the way.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_three">
                  <img className="jewwllery-icon" src={Infinity} alt="" />
                </span>
                <h6>Endless Possibilities</h6>
                <p>Discover endless design options with Jeweality. Our platform lets you experiment with different styles, materials, and settings. Whether you're making a classic piece or something modern, the possibilities are limitless.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_two">
                  <img className="jewwllery-icon" src={SpeedoMeter} alt="" />
                </span>
                <h6>Accessible Anytime, Anywhere</h6>
                <p>Design whenever and wherever inspiration hits. Jeweality's cloud-based platform lets you use our powerful AI tools from anywhere in the world. Whether you're in the office, at home, or on the go, your next great design is just a click away.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                  <img className="jewwllery-icon" src={LeadInnovation} alt="" />
                </span>
                <h6>Lead in Innovation</h6>
                <p>Stay ahead with Jeweality’s cutting-edge technology. We continuously update our tools to bring you the latest in AI and design, ensuring you have the best resources to create amazing jewelry pieces.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                  <img className="jewwllery-icon" src={Code} alt="" />
                </span>
                <h6>Instant Creativity</h6>
                <p>Bring your creative ideas to life instantly. Jeweality’s AI tools work quickly, letting you see your designs come to life in seconds. This fast turnaround boosts your creativity and helps you get your products to market faster.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_six">
                  <img className="jewwllery-icon" src={Clock} alt="" />
                </span>
                <h6>Time-Saving Solutions</h6>
                <p>Save time with Jeweality. Our efficient design process cuts out tedious manual work, allowing you to focus on refining your concepts and expanding your collection. Get your designs ready faster and start impressing your audience sooner.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_four">
                  <img className="jewwllery-icon" src={GroupIcon} alt="" />
                </span>
                <h6>Your Creative Partner</h6>
                <p>Jeweality is more than just a tool; we're your creative partner. Our platform supports and enhances your design journey, giving you the resources and inspiration to bring your best ideas to life. Trust Jeweality to be with you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <OurReview />
       <div className="d-flex justify-content-center align-items-center">
      <button className="ml-3 subscribe-button bg-[#7a4d35] p-3 rounded-md text-white" onClick={toggleReview}>
        {showReview ? "Close" : "Add Review"}
      </button>
      </div>
      {showReview &&  <RatingWidget />}
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
