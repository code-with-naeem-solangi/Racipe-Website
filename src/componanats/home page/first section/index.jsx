import React, { useState } from "react";

import "./index.css";

import { Rate, Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const FirstSection = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="pairnt">
      <nav>
        <div>
          <h1 style={{ cursor: "pointer" }}>
            Perfect <b className="color">Recipe</b>{" "}
          </h1>
        </div>

        <UnorderedListOutlined className="mobile-view" onClick={showDrawer} />
        <Drawer title="Mobile Navbar" onClose={onClose} open={open}>
          <p className="pdng">Home</p>
          <p className="pdng">Recipe</p>
          <p className="pdng">Add Recipe</p>
          <p className="pdng">blog</p>
          <p className="pdng">About US</p>
          <p className="pdng">Login</p>
          <p className="pdng">Sing up</p>
        </Drawer>
        <div className="navitem">
          <p className="pdng">Home</p>
          <p className="pdng">Recipe</p>
          <p className="pdng">Add Recipe</p>
          <p className="pdng">blog</p>
          <p className="pdng">About US</p>
        </div>
        <div className="buttons">
          <button className="btnmrgin">Login</button>

          <button className="btn">Sing up</button>
        </div>
      </nav>

      <div className="disply-fex">
        <div className="chaidFirst">
          <h1>
            Your Daily Dish A <b className="color">Food</b> Journey
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit{" "}
          </p>
          <div className="mobile-flex">
            <button className="onlyMobileView">Login</button>
            <button className="btnspcl">Sing up</button>
          </div>
          <p>
            Do you have account? <a className="colorspcl">Log in</a>
          </p>
        </div>
        <div>
          <img src="f74a071b3d82081395dfb82099c173cf.png" className="width" />

          <div className="card-width">
            <div className="display-flextwo">
              <div>
                <img src="gril.jpeg" className="widths" />
              </div>
              <div style={{ textAlign: "center" }}>
                <b style={{ marginLeft: "10px" }}>Sara johnson</b>
                <br />
                <Rate />
              </div>
            </div>
            <p style={{ fontSize: "10px" }}>
              Wow,this racipe is a flavor explosen in my mouth! very delicious
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
