import React from "react";
import Product from "./product";
import "./Imgslider_and_home.css";
import "./Comp.css";
import Head from "./Menu";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import Foot from "./Foot";

export default function Comp() {
  const item = useParams();
  return (
    <>
      <Head />
      <div>Result</div>
      <div className="_container">
        <div className="Category_filter"></div>
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
