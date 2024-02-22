import React from "react";
import "./Imgslider_and_home.css";
import { NavLink } from "react-router-dom";
export default class Pack extends React.Component {
  render() {
    return (
      <div className="pack">
        <div id="header">
          <h2>Items</h2>
        </div>
        <div id="items">
          <NavLink to="/app" style={{ textDecoration: "none" }} target="_blank">
            <img id="img" alt="img" src={this.props.src} />
          </NavLink>
          <img
            id="img"
            alt="img"
            src="https://wallpapercave.com/wp/wp4021518.jpg"
          />
          <img
            id="img"
            alt="img"
            src="https://wallup.net/wp-content/uploads/2015/07/Combined-clothes.jpg"
          />
          <img
            id="img"
            alt="img"
            src="https://i.pinimg.com/originals/82/a2/39/82a239a11e2fc12918861bb593ee1b00.jpg"
          />
        </div>
      </div>
    );
  }
}
