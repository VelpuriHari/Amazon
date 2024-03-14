import React from "react";
import "./product.css";
import { NavLink } from "react-router-dom";
import ProductInfo from "./ProductInfo";

export default function Product({ item, Id }) {
  const n = Id.id;
  return (
    <NavLink to={`/item/${item}/${n}`} style={{ textDecoration: "none" }}>
      <div className="_body">
        <div className="img_div">
          <div id="img_div">
            <img id="_img" alt="img" src={ProductInfo[item][n].img}></img>
          </div>
        </div>
        <div className="info_div">
          <div className="info">
            <div id="description">
              <p>{ProductInfo[item][n].info}</p>
            </div>

            <div className="rating">
              <div id="star">⭐⭐⭐⭐</div>
              <div id="sold">
                {ProductInfo[item][n].rating}K+ bought in past
              </div>
            </div>
          </div>
          <div className="price_div">
            <div id="deal">
              <b>Deal of the Day</b>
            </div>
            <div id="price">
              <i> ₹{Math.ceil(ProductInfo[item][n].price * 0.8)} </i>
              <small>
                M.R.P : <s>₹ {ProductInfo[item][n].price}</s> ( 20% off )
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
