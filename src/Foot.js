import React from "react";
import "./Foot.css";
import {
  InstagramOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Foot() {
  return (
    <>
      <div className="footbody">
        <div id="foot_1">
          <div id="about">
            <b>About</b>
            <lu>
              <li>Developer : Velpuri Hari Veerendra</li>
              <li>Student</li>
            </lu>
          </div>
          <div id="contact">
            <b>Contact</b>
            <lu>
              <li>
                <MailOutlined />
                veerendrahari396@gmail.com
              </li>
              <li>
                <InstagramOutlined />
                hariveerendra_velpuri
              </li>
              <li>
                <LinkedinOutlined />
                Hari Veerendra Velpuri
              </li>
            </lu>
          </div>
        </div>
        <div id="thank">
          Thank you
          <img
            alt="logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
      </div>
    </>
  );
}
