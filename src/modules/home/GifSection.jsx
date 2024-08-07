import React from "react"
import "./gif.css"
import GifVideo from "../../util/images/diamond.gif"

function GifSection() {
  return (
    <>
    <div className="section-head col-sm-12">
      <h4>
        <span>Jeweality</span> Gif
      </h4>
      <h1 className="text-center" style={{ paddingTop: "50px" }}>
        Struggling With Conceptualizing
      </h1>
      <h3 className="text-center w-100">Jewellery Collection</h3>
      <p className="text-center">Jeweality AI Prompt will help expand your brief ideas, providing you with more details for reference</p>
      {/* Placeholder for the GIF */}
      <div className="text-center gif-video">
        {/* Replace this div with your actual GIF component or img tag */}
        {/* <video src={GifVideo} autoPlay loop muted></video> */}
        <img src={GifVideo} alt="" />
      </div>
    </div>
    <div className="d-flex justify-content-center aligns-items-center">
      <button className="subscribe-button ml-3" style={{marginLeft:"20px"}}>
      How it works!
      </button>
      <button className="subscribe-button ml-3">
      Try Now!
      </button>
      </div>
      </>
  )
}

export default GifSection
