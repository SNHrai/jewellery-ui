import React from "react"
import Navbar from "../navbar/navbar"
import Crousel from "./crousel"
import "./home.css"
import GroupIcon from "../../util/images/multiple-users-silhouette.png"
import Clock from "../../util/images/clock.svg"
import Code from "../../util/images/code.svg"
import Eye from "../../util/images/eye.svg"
import SpeedoMeter from "../../util/images/speedometer.svg"
import ThumbsUpIcon from  "../../util/images/thumbs-up.svg"
// import SliderDetails from "./SliderDetails"
import Carousel from "./CarouselComponent"
import Contact from "./contact"
import Footer from "./Footer"

function home() {
  return (
    <div>
      <Navbar />
      <Crousel />
      <div className="feat bg-gray pt-5 pb-5">
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
                <img className="jewwllery-icon" src={Clock} alt="" />
                </span>
                <h6>Time-Saving Solutions</h6>
                <p>Jeweality offers rapid, efficent jewelery design services, transforming your ideas into beautiful, practical concepts quickly.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_two">
                <img className="jewwllery-icon" src={SpeedoMeter} alt="" />
                </span>
                <h6>Diverse Range of Ideas</h6>
                <p>We embrace creativity and individuality, offering a diverse range of jewelry concepts for every style-form timeless classics to bold, unconventional designs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                  <img className="jewwllery-icon" src={GroupIcon} alt="" />
                </span>
                <h6>Expert Design Team</h6>
                <p>Our design team is the heart of our operation, comprised of seasoned experts who merge creativity with technicaal known how to transform abstract ideas into stunning, feasible jewelry.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_six">
                <img className="jewwllery-icon" src={Eye} alt="" />
                </span>
                <h6>Tailored to your Vision</h6>
                <p>We tailor our jewelery design services to each client's unique visions and taste From your initial contact, we focus.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_four">
                  <img className="jewwllery-icon-thumbs-up" src={ThumbsUpIcon} alt="" />
                </span>
                <h6>Conceptual Focus</h6>
                <p>We start with a collaborative conceptualization process, where your ideas can take shape and expand.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                <img className="jewwllery-icon" src={Code} alt="" />
                </span>
                <h6>Rapdi Modification</h6>
                <p>By simplifying our processes and making them more efficient, we can deliver results within deadlines without sacrificing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default home
