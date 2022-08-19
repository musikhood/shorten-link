import React from "react";
import "./Box.scss";

function Box({ image, title, text }) {
  return (
    <div className="Box">
      <div className="Box__img-container">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Box;
