import { React } from "react";
import "./SingleItemDetails.css";
import Head from "./Menu";
import Slider_box from "./slider_box";

export default function SingleItem() {
  return (
    <>
      <Head />
      <div className="__body">
        <div style={{ padding: "10px" }}>Result</div>
        <div className="parent">
          <div id="image">
            <img
              alt="img"
              src="https://i.pinimg.com/originals/66/bf/f7/66bff7279e580fa070faaf809a8cd0a9.jpg"
              id="imaGe"
            />
          </div>
          <div id="info">
            <div id="item_info">
              <div id="describtion">
                <b>
                  Noise Pulse Go Buzz Smart Watch with Advanced Bluetooth
                  Calling, 1.69" TFT Display, SpO2, 100 Sports Mode with Auto
                  Detection, Upto 7 Days Battery (2 Days with Heavy Calling) -
                  Rose Pink
                </b>
              </div>
              <div id="rating_offers">
                <div id="Rating">⭐⭐⭐⭐⭐</div>
                <hr />
                <div id="price">
                  <b id="price_">$1,999 </b>
                  <br />
                  <small>
                    M.R.P : <s>$5,000</s> ( 80% off )
                  </small>
                </div>
              </div>
              <div id="configuration">
                <hr />
                <table id="config">
                  <th>Product details</th>
                  <tr>
                    <td>Brand</td>
                    <td>Titan</td>
                  </tr>
                  <tr>
                    <td>Model Name</td>
                    <td>Titan Smart 3</td>
                  </tr>
                  <tr>
                    <td>Style</td>
                    <td>Modern</td>
                  </tr>
                  <tr>
                    <td>Colour</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Screen Size</td>
                    <td>1.96 Inches</td>
                  </tr>
                </table>
              </div>
              <div id="about_item">
                <hr />
                <h3>About item</h3>
                <li>
                  Sharp and bright display: The 1.69’’ TFT display with
                  240*280px and 500 nits brightness ensures visual treat every
                  time you look at the watch.
                </li>
                <li>
                  ru Sync: Experience fast and stable connectivity with low
                  power consumption
                </li>
                <li>
                  BT calling: Stay in touch with your friends - right from your
                  wrist. Battery Capacity : 300mAh
                </li>
                <li>
                  Utility features: Use the utility features at your disposal
                  and become more productive - get hand wash reminders, idle
                  alert and drink water reminder, weather forecast, set alarms
                  and more.
                </li>
                <li>
                  Noise Health Suite: Lead a better life with the battery of
                  wellness features available in Noise Health Suite.
                </li>
                <li>
                  150+ cloud-based & customised watch faces: Style your watch
                  the way you like to – choose from 150 cloud-based & customised
                  watch faces.
                </li>
              </div>
              ``
            </div>
            <div id="delivery_info">
              <div id="delivery_info_inner_div">
                <div id="price_">$1,099</div>
                <div id="date">
                  <span> FREE delivery</span> 19-20 February
                </div>
                <div id="location">
                  Delivery to Visakhapatnam<br></br>530044-Update
                </div>
                <div id="ship_and_soldBy">
                  <table>
                    <th id="stock">In Stock</th>
                    <tr>
                      <td> Ship from</td> <td>Amazon</td>
                    </tr>
                    <tr>
                      <td>Sold by</td> <td>The Indus Valley</td>
                    </tr>
                  </table>
                </div>
                <div id="quantity">
                  <label>Quantity:</label>
                  <button>1</button>
                </div>
                <div id="cart">Add to Cart</div>
                <div id="Buy">Buy Now</div>
                <div id="add_gift">
                  <input type="checkbox" />
                  <lable>Add gift options</lable>
                  <hr />
                  <button>Add to Wish List</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Slider_box />
        <hr />
      </div>
    </>
  );
}
