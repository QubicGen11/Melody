import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../globals.css'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true, // Add fade transition
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="carousel-image-container">
          <img
            src="https://dgslk2men7iqd.cloudfront.net/33d739d6-a36b-4bbb-adfe-b9b6a783ffb8.png"
            alt="App Preview"
            className="carousel-image"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-image-container">
          <img
            src="https://dgslk2men7iqd.cloudfront.net/7313de06-9acd-42d3-b048-d380312ec94d.png"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-image-container">
          <img
            src="https://res.cloudinary.com/defsu5bfc/image/upload/v1720868134/3dc3220c-b8dc-4906-bd12-a52f3131c4cc_1_cao7qp.jpg"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;