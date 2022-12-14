import React from "react";
import "./info.styles.css";

function Info() {
  return (
    <div className="info-container">
      <img className="profile-image" src="avatar.jpg" alt="Nathaniel" />
      <div>
        <h1>Nathaniel Odion</h1>
        <p className="role">Frontend Developer</p>
        <a
          className="website"
          href="https://github.com/nathanilo"
          target="_blank"
        >
          Portfolio Website
        </a>
      </div>

      <a
        className="btn-email"
        href="mailto:nathanielodion@gmail.com"
        target="_blank"
      >
        Email
      </a>
    </div>
  );
}

export default Info;
