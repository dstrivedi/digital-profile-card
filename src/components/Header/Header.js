import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "../../profile.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Profile} alt="profile" />
    </div>
  );
};

export default Header;
