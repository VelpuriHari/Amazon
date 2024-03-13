import React, { useState } from "react";
import "./createAccount.css";
import { NavLink } from "react-router-dom";

export default function CreateAccount() {
  const [userID, setUserID] = useState(" ");
  const [password, setPassword] = useState(" ");
  const submit = () => {
    if (userID !== " " && password !== " ") {
      localStorage.setItem(userID, password);
      window.alert("Succesfully Created !!! Now you can Sign in");
    } else {
      window.alert("Failed");
    }
  };
  return (
    <>
      <div className="createaccountbody">
        <div id="logo">
          <img
            alt="logo"
            src="https://mundoxdescubrir.com/wp-content/uploads/2019/02/logo-amazon.png"
          />
        </div>
        <div className="createAccountContainer">
          <div id="div_1">Create Account</div>
          <div id="div_2">
            <span>User Id</span>
            <input
              type="text"
              onChange={(event) => setUserID(event.target.value)}
            />
          </div>
          <div id="div_3">
            <span>Email</span>
            <input type="email" maxLength="10" />
          </div>
          <div id="div_4">
            <span>Password</span>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div id="div_5">
            To verify your email, we will send you a text message with a
            temporary code. Message and data rates may apply.
          </div>
          <div id="div_6" onClick={() => submit()}>
            Create Account
          </div>
          <div id="div_5">Buying for work? Create a free business account</div>
          <div id="div_5">
            Already have an account? <NavLink to="/signin">Sign in </NavLink>
          </div>
          <div id="div_5">
            By creating an account or logging in, you agree to Amazon’s
            Conditions of Use and Privacy Policy.
          </div>
        </div>
      </div>
    </>
  );
}
