import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-container container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/blog">
          blog
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
