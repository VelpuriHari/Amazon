import { React, useRef } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import Select from "react-select";
import { useState } from "react";
import SideMenu from "./sideMenuBar";

const options = [
  { value: "0", label: "watches" },
  { value: "1", label: "Mobiles" },
  { value: "1", label: "Phones" },
  { value: "2", label: "Shoes" },
];

function Head() {
  const logoUrl = "https://pngimg.com/uploads/amazon/amazon_PNG11.png";
  const [selectedOption, setSelectedOption] = useState(null);
  const selectref = useRef(null);
  console.log(selectref);
  return (
    <div>
      <div className="header">
        <div id="first_child">
          <div id="logo_div">
            <NavLink to="/">
              <img src={logoUrl} alt="logo" id="_logo" />
            </NavLink>
          </div>
          <div id="location_div">
            <div id="location_img">
              <SlLocationPin />
            </div>
            <p>
              Delivering to
              <br></br>
              Update location
            </p>
          </div>
          <div id="search_div">
            <div id="search">
              <Select
                ref={selectref}
                onChange={setSelectedOption}
                options={options}
                placeholder="Select Amozon.in"
                value={selectedOption}
              />
            </div>
          </div>
        </div>
        <div className="boxs">
          <div id="box1">
            🏳️‍🌈<h4>EN</h4>
          </div>
          <div id="box2" style={{ color: "white" }}>
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <sub style={{ fontSize: "0.8em", color: "white" }}>
                Hello, sign in
              </sub>
              <br></br>
              <div style={{ color: "white" }}>Account & Lists</div>
            </NavLink>
          </div>
          <div id="box3">
            <div style={{ width: "100px" }}>
              <sub style={{ fontSize: "0.8em" }}> Returns </sub>
            </div>
            <div style={{ width: "100px" }}>& Orders</div>
          </div>
          <NavLink to="/cart" style={{ textDecoration: "none" }} target="blank">
            <div id="box4">🛒Cart</div>
          </NavLink>
        </div>
      </div>
      <div
        className="foot"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          id="item"
          style={{
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "250px" }}>
            {" "}
            <SideMenu />
          </div>
        </div>
        <NavLink
          to={`/app/${0}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div id="item" style={{ width: "70px" }}>
            Watches
          </div>
        </NavLink>
        <div id="item" style={{ width: "120px" }}>
          Amazon miniTV
        </div>
        <div id="item" style={{ width: "45px" }}>
          Sell
        </div>
        <NavLink
          to={`/app/${2}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div id="item" style={{ width: "60px" }}>
            Shoes
          </div>
        </NavLink>
        <NavLink
          to={`/app/${1}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div id="item" style={{ width: "160px" }}>
            Mobile Today's Deals
          </div>
        </NavLink>
        <NavLink
          to={`/app/${0}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div id="item" style={{ width: "90px" }}>
            Electronic
          </div>
        </NavLink>
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
