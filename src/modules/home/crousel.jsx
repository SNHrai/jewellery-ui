import React from "react"
import { Carousel } from "react-bootstrap"
import Jewelley1 from "../../util/images/jewellery-crousel-1.png"
// import Jewelley2 from "../../util/images/jewellery-2.jpg"
import "./crousel.css"

function crousel() {
  return (
    <>
      <div class="sub-main">
        <button class="button-two">
          <span>Explore</span>
        </button>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 home-section" src={Jewelley1} alt="Jewelry 1" />
          <Carousel.Caption>
            <h3>Beautiful Jewelry Piece 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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
