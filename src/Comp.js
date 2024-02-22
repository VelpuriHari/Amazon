import React from "react";
import Product from "./product";
import "./Imgslider_and_home.css";
import "./Comp.css";
import Head from "./Menu";

export default function Comp() {
  return (
    <>
      <Head />
      <div>Result</div>
      <div className="_container">
        <div className="Category_filter">hfdef</div>
        <div id="packContainer">
          {[0, 1, 2, 3, 4, 5].map(() => {
            return <Product />;
          })}
        </div>
      </div>
    </>
  );
}
