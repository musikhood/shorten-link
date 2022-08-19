import React from "react";
import "./Footer.scss";
import Logo from "../../../images/logo.svg";
import Facebook from "../../../images/icon-facebook.svg";
import Twitter from "../../../images/icon-twitter.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import Instagram from "../../../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__Box">
          <img className="Footer__logo" src={Logo} alt="" />
        </div>
        <div className="Footer__Box">
          <p>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="Footer__Box">
          <p>Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="Footer__Box">
          <p>Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="Footer__Box Footer__Box--social">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
