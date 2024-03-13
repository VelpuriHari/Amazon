import React, { useState } from "react";
import "./sideMenuBar.css";
import {
  CloseOutlined,
  MenuOutlined,
  UserOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const menudata = [
  { value: "Home", link: "/", classname: "menuitem" },
  { value: "Sign in", link: "/signin", classname: "menuitem" },
  { value: "Cart", link: "/cart", classname: "menuitem" },
  { value: "Trending", link: "/", classname: "menuitem" },
  { value: " Mobiles", link: `/app/${1}`, classname: "itemchild" },
  { value: " Shoes", link: `/app/${2}`, classname: "itemchild" },
  {
    value: "Watches",
    link: `/app/${0}`,
    classname: "itemchild",
  },
  { value: "settings", link: "/signin", classname: "menuitem" },
];

export default function SideMenu() {
  const [sideBarClass, setsideBarClass] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setsideBarClass(!sideBarClass);
        }}
      >
        {" "}
        <MenuOutlined />
        ALL
      </div>
      <div className={sideBarClass ? "sidemenuCont-active" : "sidemenuCont"}>
        <div id="sidemenuTop_div">
          <div id="userlogo">
            <UserOutlined />
          </div>
          Hello , <span>Sign in</span>
          <CloseOutlined
            onClick={() => {
              setsideBarClass(!sideBarClass);
            }}
          />
        </div>
        <div style={{ display: "grid" }}>
          {menudata.map((item) => {
            return (
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className={item.classname}>
                  {item.classname === "itemchild" ? <CaretRightOutlined /> : ""}
                  {item.value}{" "}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
