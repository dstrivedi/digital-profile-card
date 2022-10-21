import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/drashti1112"
      >
        <FontAwesomeIcon
          icon={faTwitterSquare}
          style={{ height: "30px", color: "white", marginTop: "5.5px" }}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/drashti-trivedi-65879a116/"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ height: "30px", color: "white", marginTop: "5.5px" }}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/dstrivedi">
        <FontAwesomeIcon
          icon={faGithub}
          style={{ height: "30px", color: "white", marginTop: "5.5px" }}
        />
      </a>
    </div>
  );
};

export default Footer;
