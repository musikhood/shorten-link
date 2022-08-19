import React from "react";
import "./Offers.scss";
import { Box } from "../../Components";
import Logo1 from "../../../images/icon-brand-recognition.svg";
import Logo2 from "../../../images/icon-detailed-records.svg";
import Logo3 from "../../../images/icon-fully-customizable.svg";

function Offers() {
  return (
    <div className="Offers">
      <div className="Offers__about">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="Offers__container">
        <div className="Offers__Box Offers__Box--1">
          <Box
            image={Logo1}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="Offers__line"></div>
        <div className="Offers__Box Offers__Box--2">
          <Box
            image={Logo2}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when ad where people engage with your content helps inform better decisions"
          />
        </div>
        <div className="Offers__line"></div>
        <div className="Offers__Box Offers__Box--3">
          <Box
            image={Logo3}
            title="Fully customizable"
            text="Improve brand awarness and content discoverability through customizable links, supercharging audience engagement"
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
