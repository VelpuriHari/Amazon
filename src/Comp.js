import React from "react";
import Product from "./product";
import "./Imgslider_and_home.css";
import "./Comp.css";
import Head from "./Menu";
import ProductInfo from "./ProductInfo";
import { Link, useParams } from "react-router-dom";
import Foot from "./Foot";

export default function Comp() {
  const items = [
    {
      value: "Watches",
      link: `/app/${0}`,
    },
    {
      value: "Mobiles",
      link: `/app/${1}`,
    },
    {
      value: "Shoes",
      link: `/app/${2}`,
    },
    {
      value: "Phones",
      link: `/app/${1}`,
    },
  ];
  const item = useParams();
  return (
    <>
      <Head />
      <div style={{ color: "black" }}>Result</div>
      <div className="_container">
        <div className="Category_filter">
          <h1 style={{ color: "black", margin: "10px" }}>Products</h1>
          {items.map((n) => {
            return (
              <>
                <Link
                  to={n.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div id="_items_">{n.value}</div>
                </Link>
              </>
            );
          })}
        </div>
        <div id="packContainer">
          {ProductInfo[item.item].map((e) => {
            return <Product item={item.item} Id={e} />;
          })}
        </div>
      </div>
      <Foot />
    </>
  );
}
