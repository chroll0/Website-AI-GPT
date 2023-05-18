import React from "react";
import { images } from "../../constants";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-image-content">
          <img src={images.gpt} alt="logo" />
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="footer-links-content">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-content">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-content">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
