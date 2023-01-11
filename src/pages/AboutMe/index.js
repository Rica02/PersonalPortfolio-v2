import React from "react";
import { useNav } from "../../hooks/useNav";
import {} from "./AboutMe.style";

const AboutMe = () => {
  const aboutMeRef = useNav("aboutme");

  return (
    <section id="aboutme" ref={aboutMeRef}>
      <header>
        <h1>About Me</h1>
      </header>
    </section>
  );
};

export default AboutMe;
