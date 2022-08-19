import React from "react";
import "./Header.scss";
import Picture from "../../../images/illustration-working.svg";

function Header() {
  return (
    <header className="Header">
      <div className="Header__img-container">
        <img src={Picture} alt="" />
      </div>
      <div className="Header__about">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and got detailed insights on how your
          links are performing
        </p>
        <div className="Header__button">Get Started</div>
      </div>
    </header>
  );
}

export default Header;
