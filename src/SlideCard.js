import { React } from "react";
import { NavLink } from "react-router-dom";
import "./SlideCard.css";
export default function Crad({ item, id }) {
  return (
    <>
      <NavLink to={`/item/${item}/${id.id}`} style={{ textDecoration: "none" }}>
        <div className="card_">
          <div style={{ height: "200px" }}>
            <img alt="item" id="item_img" src={id.img} />
          </div>
          <div style={{ marginTop: "5px" }}>
            {id.info.substring(0, 20)}
            <span>...Read more </span>
          </div>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div
              style={{
                backgroundColor: "gold",
                width: "90px",
                textAlign: "center",
                padding: "1px",
              }}
            >
              <small> Up to 20% off</small>
            </div>
            <div>
              <b style={{ fontSize: "1.1em" }}>₹{Math.ceil(id.price * 0.2)}</b>
              <small>
                M.R.P ₹<s>{id.price}</s>
              </small>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}
