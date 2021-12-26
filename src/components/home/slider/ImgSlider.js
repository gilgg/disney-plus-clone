import React from "react";
import "./ImgSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../../../assets/imgs/slides/slider-badag.jpg";
import slide2 from "../../../assets/imgs/slides/slider-badging.jpg";
import slide3 from "../../../assets/imgs/slides/slider-scale.jpg";
import slide4 from "../../../assets/imgs/slides/slider-scales.jpg";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider className="slider" {...settings}>
      <div className="slide-wrap">
        <img src={slide1} alt="" />
      </div>
      <div className="slide-wrap">
        <img src={slide2} alt="" />
      </div>
      <div className="slide-wrap">
        <img src={slide3} alt="" />
      </div>
      <div className="slide-wrap">
        <img src={slide4} alt="" />
      </div>
    </Slider>
  );
};

export default ImgSlider;
