import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { images } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-links-container">
        <div className="navbar-logo">
          <img src={images.gpt} alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#GPT?">What is GPT?</a>
          </li>
          <li>
            <a href="#OpenAI">Open AI</a>
          </li>
          <li>
            <a href="#CaseStudies">Case Studies</a>
          </li>
          <li>
            <a href="#Library">Library</a>
          </li>
        </ul>
      </div>
      <div className="navbar-login-smallscreen-content">
        <div className="navbar-login">
          <a href="#sign in">Sign in</a>
          <button className="basic__button">Sign up</button>
        </div>
        <div className="navbar-smallscreen-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="navbar-smallscreen-overlay scale-up-center">
              <ul className="navbar-smallscreen-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#GPT?">What is GPT?</a>
                </li>
                <li>
                  <a href="#OpenAI">Open AI</a>
                </li>
                <li>
                  <a href="#CaseStudies">Case Studies</a>
                </li>
                <li>
                  <a href="#Library">Library</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
