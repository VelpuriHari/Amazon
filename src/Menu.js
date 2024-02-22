import React from "react";
import "./index.css";

function Head() {
  const logoUrl = "https://pngimg.com/uploads/amazon/amazon_PNG11.png";

  return (
    <div>
      <div className="header">
        <div id="first_child">
          <div id="logo_div">
            <img src={logoUrl} alt="logo" id="logo" />
          </div>
          <div id="location_div">
            <p>
              Delivering to
              <br></br>
              Update location
            </p>
          </div>
          <div id="search_div">
            <input type="text" id="search" placeholder="Search Amazon.in" />
          </div>
        </div>
        <div className="boxs">
          <div id="box1">
            🏳️‍🌈<h4>EN</h4>
          </div>
          <div id="box2">
            <sub style={{ fontSize: "0.8em" }}>Hello, sing in</sub>
            <br></br>
            Account & Lists
          </div>
          <div id="box3">
            <div style={{ width: "100px" }}>
              <sub style={{ fontSize: "0.8em" }}> Returns </sub>
            </div>
            <div style={{ width: "100px" }}>& Orders</div>
          </div>
          <div id="box4">🛒Cart</div>
        </div>
      </div>
      <div className="foot">
        <div id="item" style={{ width: "50px" }}>
          All
        </div>
        <div id="item" style={{ width: "50px" }}>
          Fresh
        </div>
        <div id="item" style={{ width: "130px" }}>
          Amazon miniTV
        </div>
        <div id="item" style={{ width: "45px" }}>
          Sell
        </div>
        <div id="item" style={{ width: "90px" }}>
          Best Seller
        </div>
        <div id="item" style={{ width: "50px" }}>
          Mobile
        </div>
        <div id="item" style={{ width: "110px" }}>
          Today's Deals
        </div>
        <div id="item" style={{ width: "90px" }}>
          Electronic
        </div>
        <div id="item" style={{ width: "140px" }}>
          Customer Service
        </div>
        <div id="item" style={{ width: "150px" }}>
          New Releases
        </div>
        <div id="item">
          New Launches from Mobile, Electronics & more | Shop now
        </div>
      </div>
    </div>
  );
}
export default Head;
