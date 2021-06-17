import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";


import dancer_img from ".././assets/images/dancer_img.png"

function LandingPage() {
  return (
    <div className="landing-wrapper">

      <div className="landing-img">
        <img
          src={dancer_img}
          alt="test"
        />
      </div>

      <div className="title-section">
        <h2 className="landing-title">
          Everyone deserves a dose of good humour...
        </h2>
        <Link to="/regular">
        <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
