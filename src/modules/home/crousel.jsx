import React from "react"
import { Carousel } from "react-bootstrap"
import Jewelley1 from "../../util/images/jewellery-crousel-1.png"
// import Jewelley2 from "../../util/images/jewellery-2.jpg"
import "./crousel.css"

function crousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
        <div className="slide__content">
          <h2 id="slider-heading" className="slide__heading service-heading">
            <b className="insure-policy">Where Imagination</b> <br />
            <span className="we-offered">Meets Reality!</span>
          </h2>
          {/* <!-- <p class="slide__text">Greetings, Traveler!</p> --> */}
        </div>
          <img className="d-block w-100 home-section" src={Jewelley1} alt="Jewelry 1" />
          <Carousel.Caption>
            <h3>Beautiful Jewelry Piece 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="slide__content">
          <h2 id="slider-heading" className="slide__heading service-heading">
            <b className="insure-policy">Where Imagination</b> <br />
            <span className="we-offered">Meets Reality!</span>
          </h2>
          {/* <!-- <p class="slide__text">Greetings, Traveler!</p> --> */}
        </div>
          <img className="d-block w-100 home-section" src={Jewelley1} alt="Jewelry 2" />
          <Carousel.Caption>
            <h3>Elegant Jewelry Piece 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default crousel
