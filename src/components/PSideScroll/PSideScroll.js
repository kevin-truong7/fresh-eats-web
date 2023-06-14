import React from "react";
import { PizzaData } from "./PizzaData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SubHeading } from "../../globalStyles";
import "./PSideScroll.css";

function SideScroll() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // const connection = mysql2.createConnection({
  //   host: "34.170.104.219",
  //   user: "root",
  //   password: "Geralt1",
  //   database: "FreshEats",
  // });

  // connection.connect(function (err) {
  //   if (err) {
  //     console.error("Error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("Connected to GCS as id " + connection.threadId);
  // });

  return (
    <>
      <SubHeading>Pizza</SubHeading>
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
          {PizzaData.map((item) => (
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
