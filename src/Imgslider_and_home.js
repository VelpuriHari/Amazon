import { React, useRef } from "react";
import "./Imgslider_and_home.css";
import Pack from "./pack";
import "./SlideCard.css";
import Slider_box from "./slider_box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-box.css";
import Foot from "./Foot";

export default function ImgSlider() {
  const sliderRef = useRef(null);
  const img = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Skincare._CB580162062_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/Sports_Shoes/March/MFD/GW/ATF/Unrec/Updated_3000._CB580058264_.jpg",
  ];

  return (
    <>
      <div id="imgSlider">
        <div id="clickbtn">
          <div id="Btns">
            <button
              id="Btn_"
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
            >
              <code style={{ fontSize: "3em" }}>&lt;</code>
            </button>
            <button
              id="Btn_"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <code style={{ fontSize: "3em" }}>&gt;</code>
            </button>
          </div>
          <div id="sliderContainer">
            <Slider
              slidesToShow={1}
              ref={sliderRef}
              slidesToScroll={1}
              arrows={false}
              infinite={true}
            >
              {img.map((n) => {
                return <img alt="img" src={n} />;
              })}
            </Slider>
          </div>
        </div>
        <div
          style={{
            margin: "15px",
          }}
        >
          <div id="packContainer">
            {[0, 1, 2, 3].map((n) => {
              return <Pack id={n} />;
            })}
          </div>
          <div id="slider_box">
            <b>Best Watches</b>
            <Slider_box item={0} />
          </div>
          <div id="slider_box">
            <b>Best Shoes</b>
            <Slider_box item={2} />
          </div>
          <div id="packContainer">
            {[0, 1, 2, 3].map((n) => {
              return <Pack id={n} />;
            })}
          </div>
          <div id="slider_box">
            <b>Best Mobiles</b>
            <Slider_box item={1} />
          </div>
        </div>
        <Foot />
      </div>
    </>
  );
}
