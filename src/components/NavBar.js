import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  // The look of the nav-bar buttons
  const navLinkStyles = {
    color: "#000000",
    padding: "15px 15px",
    marginRight: "50px",
    background: "#CFDAC8",
    textDecoration: "inherit",
    borderRadius: "25px"
  };

  // The animation of the nav-bar buttons
  const activeStyle = {
    border: "solid #00FF00 2px",
    fontWeight: "bold",
    textDecoration: "underline"
  };

  // routing to the different component pages
    return (
      <div id="nav-bar">
        <h1 className="site-title">
              Targets & Triumphs
        </h1>

        <NavLink
            to="/"
            exact
            style={navLinkStyles}
            activeStyle={activeStyle}
        >
          Home
        </NavLink>
        <NavLink
            to="/targets"
            exact
            style={navLinkStyles}
            activeStyle={activeStyle}
        >
          Targets
        </NavLink>

        <NavLink
            to="/triumphs"
            exact
            style={navLinkStyles}
            activeStyle={activeStyle}
        >
          Triumphs
        </NavLink>
      </div>
    );
}

export default NavBar;