import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-items">
          <div className="footer-link-item">
            <a target="_blank" href="https://facebook.com" rel="noreferrer">
              <i className="fab fa-2x fa-facebook-square"></i>
            </a>
          </div>

          <div className="footer-link-item">
            <a target="_blank" href="https://twitter.com" rel="noreferrer">
              <i className="fab fa-2x fa-twitter-square"></i>
            </a>
          </div>

          <div className="footer-link-item">
            <a target="_blank" href="https://instagram.com" rel="noreferrer">
              <i className="fab fa-2x fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
      <p>Mateusz for WSB &copy; 2021 </p>
      </div>
    </div>
  );
}

export default Footer;
