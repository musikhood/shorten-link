import React, { useRef, useState } from "react";
import "./ShortenLink.scss";

function ShortenLink({ links, setLinks }) {
  const inputVal = useRef(null);
  const [error, setError] = useState(false);

  function getLink() {
    if (inputVal.current.value === "") {
      setError(true);
      return;
    }
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal.current.value}`)
      .then((response) => response.json())
      .then((result) => {
        setLinks([
          ...links,
          {
            link: inputVal.current.value,
            shortLink: result.result.full_short_link,
          },
        ]);
        setError(false);
        inputVal.current.value = "";
      });
  }

  return (
    <div className="ShortenLink">
      <div className="ShortenLink__container">
        <div
          className={`ShortenLink__input-container ${
            error ? "ShortenLink__input-container--error" : ""
          }`}
        >
          <input
            ref={inputVal}
            type="text"
            placeholder="Shorten a link here..."
          />
          {error && (
            <div className="ShortenLink__input-error">Please add a link</div>
          )}
        </div>
        <div className="ShortenLink__button" onClick={() => getLink()}>
          Shorten it!
        </div>
      </div>
    </div>
  );
}

export default ShortenLink;
