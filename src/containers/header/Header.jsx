import React from "react";
import { images } from "../../constants";

import "./header.css";

function Header() {
  return (
    <div className="header-section" id="#home">
      <div className="header-content">
        <div className="header-text-content">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="manrope__blue">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="email-input">
            <input
              type="text"
              placeholder="Your Email Address"
              className="manrope__blue"
              style={{ background: "#052D56" }}
            />
            <button
              className="basic__button"
              style={{ height: "73px", borderRadius: "0px 5px 5px 0px" }}
            >
              Get Started
            </button>
          </div>
          <div className="visitor-content">
            <img src={images.ellipse31} alt="visitor" />
            <img src={images.ellipse32} alt="visitor" />
            <img src={images.ellipse33} alt="visitor" />
            <img src={images.ellipse34} alt="visitor" />
            <img src={images.ellipse35} alt="visitor" />
            <img src={images.ellipse36} alt="visitor" />
            <div className="visitors-number">1.6k+</div>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header-ai-image">
          <img src={images.header_img} alt="AI Face" />
        </div>
      </div>
    </div>
  );
}

export default Header;
