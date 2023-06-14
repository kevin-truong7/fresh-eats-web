import React from "react";
import { HealthyData } from "./HealthyData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SubHeading } from "../../globalStyles";
import "../../components/PSideScroll/PSideScroll.css";

function SideScroll() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <SubHeading>Healthy Choices</SubHeading>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {HealthyData.map((item) => (
            <div className="card inline-block">
              <div className="card-top">
                <img
                  className="imgS-setting"
                  src={item.linking}
                  alt={item.title}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.item1}</h3>
                <h3>{item.item2}</h3>
                <h3>{item.item3}</h3>
                <p className="category">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}

export default SideScroll;
