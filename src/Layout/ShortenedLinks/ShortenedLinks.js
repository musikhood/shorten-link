import React from "react";
import "./ShortenedLinks.scss";
import { LinkBox } from "../../Components";

function ShortenedLinks({ links, setLinks }) {
  return (
    <div className="ShortenedLinks">
      <div className="ShortenedLinks__container">
        {links.map((link) => (
          <LinkBox link={link.link} shortLink={link.shortLink} />
        ))}
        {links.length > 0 && (
          <div
            className="ShortenedLinks__button"
            onClick={() => {
              setLinks([]);
            }}
          >
            X
          </div>
        )}
      </div>
    </div>
  );
}

export default ShortenedLinks;
