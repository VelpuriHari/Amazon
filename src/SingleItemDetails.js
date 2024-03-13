import { React } from "react";
import "./SingleItemDetails.css";
import Head from "./Menu";
import Slider_box from "./slider_box";
import { NavLink, useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import Foot from "./Foot";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
///
function addtoCart(i, n) {
  const num = i * 10 + parseInt(n);
  window.alert("added to cart " + n);
  if (localStorage.getItem("Ids")) {
    const listString = localStorage.getItem("Ids");
    const list = JSON.parse(listString);
    list.push(num);
    const IdsString = JSON.stringify(list);
    localStorage.setItem("Ids", IdsString);
  } else {
    const num_ = [num];
    const IdsString = JSON.stringify(num_);
    localStorage.setItem("Ids", IdsString);
  }
}
///
const handleMenuClick = (e) => {
  message.info("Selected : " + e.key);
};
const items = [
  {
    label: "1",
    key: "1",
    icon: <CheckOutlined />,
    default: true,
  },
  {
    label: "2",
    key: "2",
    icon: <CheckOutlined />,
  },
  {
    label: "3",
    key: "3",
    icon: <CheckOutlined />,
  },
  {
    label: "4",
    key: "4",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "5",
    key: "5",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "6",
    key: "6",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "7",
    key: "7",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "8",
    key: "8",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "9",
    key: "9",
    icon: <CheckOutlined />,
    danger: true,
  },
  {
    label: "10",
    key: "10",
    icon: <CheckOutlined />,
    danger: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
export default function SingleItem() {
  const { Id } = useParams();
  const { item } = useParams();
  const foo = ProductInfo[item][Id].details[0];

  /*

  const text = watches[itemId].about_item;
  console.log(text);
  const aboutItem = text.slice(0, text.indexOf("."));
  console.log(text);
  console.log(aboutItem);
  */
  return (
    <>
      <Head />
      <div className="__body">
        <div style={{ padding: "10px" }}>Result</div>
        <div className="parent">
          <div id="image">
            <img alt="img" src={ProductInfo[item][Id].img} id="imaGe" />
          </div>
          <div id="info">
            <div id="item_info">
              <div id="describtion">
                <b>{ProductInfo[item][Id].info}</b>
              </div>
              <div id="rating_offers">
                <div id="Rating">⭐⭐⭐⭐</div>
                <hr />
                <div id="price">
                  <b id="price_">
                    ₹{Math.ceil(ProductInfo[item][Id].price * 0.8)}
                  </b>
                  <br />
                  <small>
                    M.R.P : <s>₹{ProductInfo[item][Id].price}</s> ( 20% off )
                  </small>
                </div>
              </div>
              <div id="configuration">
                <hr />
                <table id="config">
                  <th>Product details</th>
                  {Object.keys(foo).map((key) => {
                    return (
                      <>
                        <tr>
                          <td>{key}</td>
                          <td>{foo[key]}</td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
              <div id="about_item">
                <hr />
                <h3>About item</h3>
                <lu>
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
                    BT calling: Stay in touch with your friends - right from
                    your wrist. Battery Capacity : 300mAh
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
                    the way you like to – choose from 150 cloud-based &
                    customised watch faces.
                  </li>
                </lu>
              </div>
            </div>
            <div id="delivery_info">
              <div id="delivery_info_inner_div">
                <div id="price_">
                  ₹{Math.ceil(ProductInfo[item][Id].price * 0.8)}
                </div>
                <hr />
                <div id="date">
                  <span> FREE delivery</span> 19-20 February
                </div>
                <div id="location">
                  Delivery to Visakhapatnam<br></br>530044-Update
                </div>
                <hr />
                <div id="ship_and_soldBy">
                  <table>
                    <th id="stock" width="100%">
                      In Stock
                    </th>
                    <tr>
                      <td> Ship from</td> <td>Amazon</td>
                    </tr>
                    <tr>
                      <td>Sold by</td> <td>The Indus Valley</td>
                    </tr>
                  </table>
                </div>
                <div style={{ margin: "10px" }}>
                  <b>
                    Qty:
                    <Dropdown menu={menuProps}>
                      <Button>
                        <Space>
                          Select
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                  </b>
                </div>

                <div id="cart" onClick={() => addtoCart(item, Id)}>
                  Add to Cart
                </div>
                <NavLink
                  to={`/buy/${item}/${Id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div id="Buy">Buy Now</div>
                </NavLink>
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
        <Slider_box item={0} />
        <hr />
      </div>
      <Foot />
    </>
  );
}
