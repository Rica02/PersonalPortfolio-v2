import React from "react";
import { useNav } from "../../hooks/useNav";

const Skills = () => {
  const skillsRef = useNav("skills");

  return (
    <section id="skills" ref={skillsRef}>
      <header>
        <h1>Skills</h1>
      </header>
    </section>
  );
};

export default Skills;
