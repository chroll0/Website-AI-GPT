import React from "react";
import { images } from "../../constants";

import "./possibility.css";

function Possibility() {
  return (
    <div className="possibility-container section__padding" id="CaseStudies">
      <div className="possibility-image">
        <img src={images.possibility_image} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are
          <br />
          beyond your imagination
        </h1>
        <p className="manrope__blue">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="manrope__blue">Request Early Access to Get Started</p>
      </div>
    </div>
  );
}

export default Possibility;
