import React, { useState, useEffect } from "react";
import "./LinkBox.scss";

function LinkBox({ link, shortLink }) {
  const [letters, setLetters] = useState(15);

  useEffect(() => {
    if (window.innerWidth > 999) {
      setLetters(40);
    } else {
      setLetters(20);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 999) {
        setLetters(40);
      } else {
        setLetters(20);
      }
    });
  }, []);
  return (
    <div className="LinkBox">
      <p>{link.length > letters ? link.slice(0, letters - 1) + "..." : link}</p>
      <p>
        <span>{shortLink}</span>
      </p>
      <div
        className="LinkBox__button"
        onClick={() => {
          navigator.clipboard.writeText(String(shortLink));
        }}
      >
        Copy
      </div>
    </div>
  );
}

export default LinkBox;
