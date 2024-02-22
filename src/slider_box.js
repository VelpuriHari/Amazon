import { React, useRef } from "react";
import Crad from "./SlideCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-box.css";

export default function Slider_box() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  return (
    <>
      <div id="slider-box">
        <div id="btns">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            &lt;
          </button>
        </div>

        <div id="slider-container">
          <Slider
            slidesToShow={5}
            ref={sliderRef}
            slidesToScroll={3}
            arrows={false}
            infinite={false}
          >
            {Array(20)
              .fill(" ")
              .map(() => {
                return <Crad />;
              })}
          </Slider>
        </div>
        <div id="btns">
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
