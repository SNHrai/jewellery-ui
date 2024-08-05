import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./crouselComponent.css" // Make sure the CSS file name matches exactly

import Jewel1 from "../../util/images/jewel1.png"
import Jewel2 from "../../util/images/jewel2.png"
import Jewel3 from "../../util/images/jewel3.png"
import Jewel4 from "../../util/images/jewel4.png"
import Jewel5 from "../../util/images/jewel5.png"
import Jewel6 from "../../util/images/jewel6.png"

function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <div className="section-head col-sm-12">
        <h4>
          <span>AI</span> Creations
        </h4>
      </div>
      <Slider {...settings}>
        <div>
          <img src={Jewel1} alt="Image 1" />
        </div>
        <div>
          <img src={Jewel2} alt="Image 2" />
        </div>
        <div>
          <img src={Jewel3} alt="Image 3" />
        </div>
        <div>
          <img src={Jewel4} alt="Image 4" />
        </div>
        <div>
          <img src={Jewel5} alt="Image 5" />
        </div>
        <div>
          <img src={Jewel6} alt="Image 6" />
        </div>
      </Slider>
    </>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: "block", background: "rgba(255, 255, 255, 0.7)", borderRadius: "50%", right: "10px" }} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: "block", background: "rgba(255, 255, 255, 0.7)", borderRadius: "50%", left: "10px", zIndex: 1 }} onClick={onClick} />
}

export default CarouselComponent
