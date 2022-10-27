import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import "./Main.css";

const Intro = () => {
  return (
    <div className="intro">
      <h4>Drashti Trivedi</h4>
      <p className="job">Front End Developer</p>
      <p>
        <a
          className="website"
          href="drashtitrivedi.com"
          target="_blank"
          rel="noreferrer"
        >
          drashti.trivedi
        </a>
      </p>
      <Button
        href="https://mail.google.com/mail/u/0/#inbox"
        as="a"
        variant="primary"
        size="sm"
      >
        <FontAwesomeIcon icon={faGoogle} />
        {/* Email */}
      </Button>
    </div>
  );
};

export default Intro;
