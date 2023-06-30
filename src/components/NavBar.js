import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  // The look of the nav-bar buttons
  const linkStyles = {
    color: "#00D4FF",
    padding: "10px 20px",
    marginRight: "20px",
    background: "#0D2E4E",
    textDecoration: "inherit", /* no underline */
    borderRadius: "10px"
  };

  // The animation of the nav-bar buttons
  const activeStyle = {
    border: "solid #00D4FF 2px",
    fontWeight: "bold"
  };

    return(
        <div id="nav-bar">
          <h1 className="site-title">
              Targets & Triumphs
          </h1>
          <NavLink
            to="/"
            /* set "exact" so it knows to only set activeStyle when route is deeply equal to link */
            exact
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={activeStyle}
            >Home
            </NavLink>
          <NavLink
            to="/targets"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
            >Targets</NavLink>

        <NavLink
            to="/triumphs"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
            >Triumphs</NavLink>
        </div>
    );
}

export default NavBar;