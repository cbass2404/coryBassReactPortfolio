import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function Contact() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: `url(${contactPagePicture}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </div>

            <a
              className="text"
              href="https://www.linkedin.com/in/cory-bass"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>

            <a
              className="text"
              href="https://github.com/cbass2404"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">(601)381-2204</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">cory.bass.07@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Many, La</div>
          </div>
        </div>
      </div>
    </div>
  );
}
