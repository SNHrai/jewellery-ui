import React from "react"
import "./gif.css"
import GifVideo from "../../util/images/diamond.gif"
import { useNavigate } from "react-router-dom"


function GifSection() {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/comingsoon")
  }

  const handleOnClickDashboard = () => {
    navigate("/dashboard")
  }

  return (
    <>
    <div className="section-head col-sm-12">
      <h4>
        <span>AI-CREATION</span> Gif
      </h4>
      <h1 className="text-center" style={{ paddingTop: "50px" }}>
        Struggling With Conceptualizing
      </h1>
      <h3 className="text-center w-100">Jewellery Collection</h3>
      <p className="text-center">AI-CREATION AI Prompt will help expand your brief ideas, providing you with more details for reference</p>
      {/* Placeholder for the GIF */}
      <div className="text-center gif-video">
        {/* Replace this div with your actual GIF component or img tag */}
        {/* <video src={GifVideo} autoPlay loop muted></video> */}
        <img src={GifVideo} alt="" />
      </div>
    </div>
    <div className="gap-6 d-flex justify-content-center aligns-items-center gif-buttons">
      <button className="text-white form-login-field-custom subscribe-button bg-[#7a4d35] p-3 rounded-md" style={{marginLeft:"50px"}} onClick={handleOnClick}>
      How it works!
      </button>
      <button className="text-white form-login-field-custom subscribe-button  bg-[#7a4d35] p-3 rounded-md" onClick={handleOnClickDashboard} style={{marginLeft:"50px", width:"145px"}}>
      Try Now!
      </button>
      </div>
      </>
  )
}

export default GifSection
