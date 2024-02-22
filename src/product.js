import React from "react";
import "./product.css";
import { NavLink } from "react-router-dom";

export default class Product extends React.Component {
  render() {
    return (
      <NavLink to="/item" style={{ textDecoration: "none" }} target="_blank">
        <div className="_body">
          <div className="img_div">
            <div id="img_div">
              <img
                id="_img"
                alt="img"
                src="https://i.pinimg.com/originals/66/bf/f7/66bff7279e580fa070faaf809a8cd0a9.jpg"
              ></img>
            </div>
          </div>
          <div className="info_div">
            <div className="info">
              <div id="description">
                <a>
                  Noise Pulse Go Buzz Smart Watch with Advanced Bluetooth
                  Calling, 1.69" TFT Display, SpO2, 100 Sports Mode with Auto
                  Detection, Upto 7 Days Battery
                </a>
              </div>

              <div className="rating">
                <div id="star">⭐⭐⭐⭐</div>
                <div id="sold">4K+ bought in past</div>
              </div>
            </div>
            <div className="price_div">
              <div id="deal">
                <b>Deal of the Day</b>
              </div>
              <div id="price">
                <i>$1,099 </i>
                <small>
                  M.R.P : <s>$5,000</s> ( 80% off )
                </small>
              </div>
            </div>
            <div id="bottom_div">
              <div id="prime">
                <b id="p">✔️prime</b> Get it by <b>Monday, 1 March</b>
              </div>
              <div id="delivery">FREE Delivery by Amazon</div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
