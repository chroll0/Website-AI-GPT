import React from "react";
import {
  Header,
  WhatGPT3,
  Blog,
  Features,
  Possibility,
  Footer,
} from "./containers";

import { Navbar, CTA, Brand } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app__wrapper">
      <div className="gradient__bg  gradient__second-bg section__padding">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
