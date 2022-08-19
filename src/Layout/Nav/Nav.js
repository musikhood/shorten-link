import React, { useState, useEffect } from "react";
import "./Nav.scss";
import Logo from "../../../images/logo.svg";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 999) {
        setOpenMenu(false);
      }
    });
  }, []);
  return (
    <nav className="Nav">
      <div className="Nav__container">
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
        <div className="Nav__desktop-menu">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Login</p>
          <div className="Nav__button">Sign Up</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
