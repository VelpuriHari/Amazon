import React from "react";
import "./Buy.css";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";

export default function Buy() {
  const item = useParams();
  const Id = ProductInfo[item.item][item.id];
  const price = Math.ceil(Id.price * 0.8);
  return (
    <>
      <div id="buy_logo">
        <img
          alt="logo"
          src="https://mundoxdescubrir.com/wp-content/uploads/2019/02/logo-amazon.png"
        />
      </div>
      <div className="buy_body">
        <img width="200px" alt="img" src={Id.img} />
        <tr>
          <b>Order Summary</b>
        </tr>
        <tr>
          <b>Items Quantity : </b>2
        </tr>
        <tr>
          <b>Price : </b>₹{price}
        </tr>
        <tr>
          <b>Total Order : </b>₹{2 * price}
        </tr>
      </div>
      <div id="buy_thank">Thank you !!!</div>
    </>
  );
}
