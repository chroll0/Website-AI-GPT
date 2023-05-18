import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature-container">
      <div className="feature-title">
        <div />
        <h1 className="manrope__white">{title}</h1>
      </div>
      <div className="feature-text">
        <p className="manrope__blue">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
