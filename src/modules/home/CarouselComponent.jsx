import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./crouselComponent.css"


function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 3" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 4" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 5" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x200" alt="Image 6" />
      </div>
    </Slider>
  );
};

export default CarouselComponent