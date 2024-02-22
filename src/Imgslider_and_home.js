import React from "react";
import "./Imgslider_and_home.css";
import Pack from "./pack";
import "./SlideCard.css";
import Slider_box from "./slider_box";

export default class ImgSlider extends React.Component {
  index = 0;
  img = [
    "https://static.wixstatic.com/media/f99ebf_ba5a2a2bdc0a46308f460daa84f9e3a9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01/f99ebf_ba5a2a2bdc0a46308f460daa84f9e3a9~mv2.jpg",
    "https://th.bing.com/th/id/R.a76ea106081130f5c14a8bd2421e7f00?rik=otPnFy86GqY1rg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1866317.jpg&ehk=7pc5ykJq%2bKOFMF7bCgYulTiq2fpgGZWJr%2bR7NYB6g%2fI%3d&risl=&pid=ImgRaw&r=0",
    "https://i.pinimg.com/originals/82/a2/39/82a239a11e2fc12918861bb593ee1b00.jpg",
    "https://www.scoopbyte.com/wp-content/uploads/2019/09/top_10_online_clothing_store_usa.jpg",
    "https://wallpapercave.com/wp/wp4021518.jpg",
    "https://wallup.net/wp-content/uploads/2015/07/Combined-clothes.jpg",
    "https://wallpapercave.com/wp/wp7830963.jpg",
  ];
  constructor(props) {
    super(props);

    this.state = {
      width: "100",
      height: "500px",
      backgroundColor: " rgb(135, 193, 193)",
      backgroundImage: " url(https://wallpapercave.com/wp/wp7830963.jpg)",
      backgroundSize: "100% 100%",
    };
  }
  changeBackground = () => {
    this.setState(() => ({
      backgroundImage: `url(${
        this.index >= 6
          ? ((this.index = 0), this.img[this.index])
          : this.img[this.index++]
      })`,
    }));
  };
  changeBackgroundForward = () => {
    this.setState(() => ({
      backgroundImage: `url(${
        this.index <= 0
          ? ((this.index = 6), this.img[this.index])
          : this.img[this.index--]
      })`,
    }));
  };
  render() {
    return (
      <div id="imgSlider" style={this.state}>
        <div id="clickbtn">
          <button id="btn" onClick={this.changeBackground}>
            <code style={{ fontSize: "3em" }}>&lt;</code>
          </button>
          <button id="btn" onClick={this.changeBackgroundForward}>
            <code style={{ fontSize: "3em" }}>&gt;</code>
          </button>
        </div>
        <div
          style={{
            margin: "15px",
          }}
        >
          <div id="packContainer">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
              return (
                <Pack src="https://i.pinimg.com/originals/66/bf/f7/66bff7279e580fa070faaf809a8cd0a9.jpg" />
              );
            })}
          </div>
          <div style={{ backgroundColor: "white", margin: "10px" }}>
            <Slider_box />
          </div>
          <div style={{ backgroundColor: "white", margin: "10px" }}>
            <Slider_box />
          </div>
          <div id="packContainer">
            {[0, 1, 2, 3].map(() => {
              return (
                <Pack src="https://i.pinimg.com/originals/66/bf/f7/66bff7279e580fa070faaf809a8cd0a9.jpg" />
              );
            })}
          </div>
          <div style={{ backgroundColor: "white", margin: "10px" }}>
            <Slider_box />
          </div>
        </div>
      </div>
    );
  }
}
