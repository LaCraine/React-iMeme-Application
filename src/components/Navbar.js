import React, { useState } from "react";
import { AddMemeButton } from "./AddMemeButton";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      <nav className="navbar">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          iMeme <i className="fas fa-drumstick-bite" />
        </Link>

        {/* BIG/SMALL MENU */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>

          {/* HOME */}
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* REGULAR */}
          <li className="nav-item">
            <Link to="/regular" className="nav-links" onClick={closeMobileMenu}>
              Regular
            </Link>
          </li>

          {/* HOT */}
          <li className="nav-item">
            <Link to="/hot" className="nav-links" onClick={closeMobileMenu}>
              Hot <i className="fas fa-fire"></i>
            </Link>
          </li>

        {/* Add Meme button in mobile menu */}
          <li className="nav-item">
            <Link
              to="/add"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              ADD
            </Link>
          </li>
        </ul>

        <AddMemeButton />
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
