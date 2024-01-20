import React from "react";
import "./index.css";
import { FacebookOutlined, InstagramOutlined, PicCenterOutlined, PrinterOutlined, WhatsAppOutlined } from "@ant-design/icons";
const FoterComponant = () => {
  return (
    <>
      <div className="div-just-color">
        <div className="div-pairant-all">
        <div className="widtss">
          <h1 style={{ cursor: "pointer" }}>
            Perfect <b className="color">Recipe</b>
          </h1>
          <p style={{textAlign:"left"}}>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout.
          </p>
        </div>
        <div className="new-flex">
          <div style={{padding:"5px"}}>
            <b>Quick links</b>
            <p>Home</p>
            <p>Racipe</p>
            <p>Blog</p>
          </div>
          <div style={{padding:"5px"}}>
            <b>Quick links</b>
            <p>Share Racipe</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div style={{padding:"5px"}}>
            <b>Legal</b>
            <p>Terms Of Use</p>
            <p>Privecy & Cookies</p>
          </div>
        </div>
        <div className="widt">
            <b >Newsletter</b>
            <p>Subscribe to our newsletter to get more free tip </p>
            <div >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inp-per"
            />
            <button className="btnsss">Subscribe</button>
          </div>
        </div>
        </div>
      <hr />
      <div className="div-pairant-alls">
        <p>© 2023 RecipeLogo. All Right Reserved</p>
        <div className="icon">
            <FacebookOutlined style={{cursor:"pointer", marginRight:"20px"}}/>
            <PicCenterOutlined style={{cursor:"pointer", marginRight:"20px"}}/>
            <InstagramOutlined style={{cursor:"pointer", marginRight:"20px"}}/>
            <WhatsAppOutlined style={{cursor:"pointer", marginRight:"20px"}}/>
        </div>
      </div>
      </div>
    </>
  );
};

export default FoterComponant;
