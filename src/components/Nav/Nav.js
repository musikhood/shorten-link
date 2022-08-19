import React, { useState } from "react";
import "./Nav.scss";
import Logo from "../../../images/logo.svg";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="Nav">
      <div className="Nav__logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className="Nav__hamburger-menu-container"
        onClick={() => {
          setOpenMenu((prevState) => !prevState);
        }}
      >
        <div
          className={`Nav__hamburger-menu ${
            openMenu ? "Nav__hamburger-menu--active" : ""
          }`}
        ></div>
      </div>
      <div
        className={`Nav__mobile-menu ${
          openMenu ? "Nav__mobile-menu--active" : ""
        }`}
      >
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
        <div className="Nav__mobile-menu-line"></div>
        <p>Login</p>
        <div className="Nav__mobile-menu-button">Sign Up</div>
      </div>
    </div>
  );
}

export default Nav;
