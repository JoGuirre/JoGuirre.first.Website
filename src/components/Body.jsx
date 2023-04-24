import React from "react";
import "../css/Body.css";
import BodyHeader from "./BodyHeader";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import BlobArt from "../assets/circle-scatter-haikei.svg";

function Body() {
  return (
    <div className="body__container">
      <BodyHeader />
      <AboutMe />
      <Projects />
      <ContactMe />
      <div className="background__blob__container">
        {/* <img className="background__blob" src={BlobArt} alt="Blobs" /> */}
      </div>
    </div>
  );
}

export default Body;
