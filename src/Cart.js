import { React } from "react";
import Head from "./Menu";
import ProductInfo from "./ProductInfo";
import "./Cart.css";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";
import Foot from "./Foot";
import { NavLink } from "react-router-dom";

const listString = localStorage.getItem("Ids");
const list = JSON.parse(listString);
const ids = [...new Set(list)];
function removeFun(num) {
  const listString = localStorage.getItem("Ids");
  const list = JSON.parse(listString);
  const ids = [...new Set(list)];
  ids.splice(ids.indexOf(num), 1);
  const IdsString = JSON.stringify(ids);
  localStorage.setItem("Ids", IdsString);
}
//
const handleMenuClick = (e) => {
  message.info("Selected : " + e.key);
};
const items = [
  {
    label: "1",
    key: "1",
    icon: <CheckOutlined />,
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
export default function Cart() {
  return (
    <>
      <Head />
      <div className="cart">
        <h1>Shopping Cart</h1>
        {ids.map((num) => {
          const item = parseInt(num / 10);
          const id = num % 10;
          return (
            <div id="cart_cont">
              <div>
                <img src={ProductInfo[item][id].img} alt="img" />
              </div>

              <div id="info_">
                {ProductInfo[item][id].info}
                <div id="bottom_div">
                  <div
                    id="deal_"
                    style={{
                      backgroundColor: "gold",
                      width: "125px",
                      padding: "2px",
                    }}
                  >
                    <b>Deal of the Day</b>
                  </div>
                  <div id="prime">
                    <b id="p">✔️prime</b> Get it by <b>Monday, 1 March</b>
                  </div>
                  <div id="delivery">FREE Delivery by Amazon</div>
                </div>
              </div>
              <div className="right_div">
                <div id="first_right_div">
                  <div>
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
                  <div>
                    <b>
                      Price:₹
                      {Math.ceil(ProductInfo[item][id].price * 0.8)}
                    </b>
                  </div>
                </div>
                <div id="second_right_div">
                  <NavLink to="/cart" target="blank">
                    <div
                      id="remove"
                      onClick={() => {
                        removeFun(num);
                      }}
                    >
                      Remove
                    </div>
                  </NavLink>
                  <NavLink
                    to={`/buy/${item}/${id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div id="buy">Buy</div>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Foot />
    </>
  );
}
