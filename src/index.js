import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>
);
