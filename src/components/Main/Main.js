import React from "react";

import About from "./About.js";
import Interests from "./Interests.js";
import Intro from "./Intro.js";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <About />
      <Interests />
    </div>
  );
};

export default Main;
