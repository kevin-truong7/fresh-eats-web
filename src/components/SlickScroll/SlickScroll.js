import React from "react";
import "./SlickScroll.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopRestaurants } from "./MockData";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function SlickScroll() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      // breakpoint: settings for different screen sizes
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleDoubleRight style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleDoubleLeft style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  }

  return (
    <div className="SlickScroll">
      <Slider {...settings}>
        {TopRestaurants.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                className="imgC-setting"
                src={item.linking}
                alt={item.title}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p className="category">{item.category}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickScroll;
