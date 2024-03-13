import React from "react";
import "./Imgslider_and_home.css";
import { NavLink } from "react-router-dom";
import ProductInfo from "./ProductInfo";
export default function Pack(id) {
  return (
    <div className="pack">
      <div id="header">
        <div>
          <b>Trending</b>
        </div>
      </div>
      <div id="items">
        <NavLink to={`/app/${0}`} style={{ textDecoration: "none" }}>
          <div id="pack_box">
            <img id="img" alt="img" src={ProductInfo[0][id.id].img} />
            <small>Watches</small>
          </div>
        </NavLink>
        <NavLink to={`/app/${1}`} style={{ textDecoration: "none" }}>
          <div id="pack_box">
            <img id="img" alt="img" src={ProductInfo[1][id.id].img} />
            <small>Mobiles</small>
          </div>
        </NavLink>
        <NavLink to={`/app/${2}`} style={{ textDecoration: "none" }}>
          <div id="pack_box">
            <img id="img" alt="img" src={ProductInfo[2][id.id].img} />
            <small>Shoes</small>
          </div>
        </NavLink>
        <NavLink to={`/app/${0}`} style={{ textDecoration: "none" }}>
          <div id="pack_box">
            <img id="img" alt="img" src={ProductInfo[0][id.id + 4].img} />
            <small>Trending</small>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
