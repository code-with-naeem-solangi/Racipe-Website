import React from "react";
import "./index.css";
const StayInTouchComponant = () => {
  return (
    <>
      <div className="main-div">
        <div className="tex-div">
          <h2>Let’s Stay In Touch!</h2>
          <p>
            Join our newsletter, so that we reach out to you with our news and
            offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inp-email"
            />
            <button className="sbsbtn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayInTouchComponant;
