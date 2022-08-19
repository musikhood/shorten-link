import React from "react";
import "./ShortenLink.scss";

function ShortenLink() {
  return (
    <div className="ShortenLink">
      <div className="ShortenLink__container">
        <div className="ShortenLink__input-container">
          <input type="text" placeholder="Shorten a link here..." />
          <div className="ShortenLink__input-error"></div>
        </div>
        <div className="ShortenLink__button">Shorten it!</div>
      </div>
    </div>
  );
}

export default ShortenLink;
