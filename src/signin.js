import React, { useState } from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";

export default function SingIn() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    if (localStorage.getItem(userID) === password) {
      window.alert("Succesfully Login !!!");
    } else {
      window.alert("Failed");
    }
  };

  return (
    <>
      <div className="singinbody">
        <div id="logo">
          <img
            alt="logo"
            src="https://mundoxdescubrir.com/wp-content/uploads/2019/02/logo-amazon.png"
          />
        </div>
        <div className="singinContainer">
          <div id="sing_div_1">Sign in</div>
          <div id="sing_div_2">
            <span>User Id</span>
            <input
              type="text"
              onChange={(event) => setUserID(event.target.value)}
            />
          </div>
          <div id="sing_div_3">
            <span>Password</span>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div id="sing_div_4" onClick={() => submit()}>
            Continue
          </div>
          <div id="sing_div_5">
            By continuing, you agree to Amazon's
            <NavLink to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
              {" "}
              Conditions of Use{" "}
            </NavLink>
            and
            <NavLink to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
              {" "}
              Privacy Notice.{" "}
            </NavLink>
          </div>
          <div id="sing_div_6">
            <NavLink>Need help?</NavLink>
          </div>

          <div id="sing_div_7">
            Buying for work? <br />
            Shop on Amazon Business
          </div>
        </div>
        <NavLink
          to="/create account"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="createAccount">Create Account</div>
        </NavLink>
      </div>
    </>
  );
}
