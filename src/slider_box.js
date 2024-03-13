import { React, useRef } from "react";
import Crad from "./SlideCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-box.css";
import ProductInfo from "./ProductInfo";

export default function Slider_box(item) {
  const sliderRef = useRef(null);
  const n = parseInt(item.item);
  var settings = {
    ref: sliderRef,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          ref: sliderRef,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          ref: sliderRef,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          ref: sliderRef,
          slidesToScroll: 3,
        },
      },
    ],
  };
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
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            &gt;
          </button>
        </div>
        <div id="slider-container">
          <Slider {...settings}>
            {ProductInfo[n].map((e) => {
              return (
                <>
                  <Crad item={n} id={e} />
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
