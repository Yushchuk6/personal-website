import React from "react";
import { NavLink } from "react-router-dom";
// import { BiPencil, BiHomeAlt } from "react-icons/bi";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container flexbox-center">
        <NavLink className="link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="link" to="/blog" exact>
          Blog
        </NavLink>
        <NavLink className="link" to="/ttt" exact>
          Blog2
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
