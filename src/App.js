import React, { useState, useEffect } from "react";
import {
  Nav,
  Header,
  ShortenLink,
  Offers,
  Boost,
  Footer,
  ShortenedLinks,
} from "./Layout";

function App() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links"));

    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);
  return (
    <>
      <Nav />
      <Header />
      <ShortenLink links={links} setLinks={setLinks} />
      <ShortenedLinks links={links} setLinks={setLinks} />
      <Offers />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
