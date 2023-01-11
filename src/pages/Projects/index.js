import React from "react";
import { useNav } from "../../hooks/useNav";

const Projects = () => {
  const projectsRef = useNav("projects");

  return (
    <section id="projects" ref={projectsRef}>
      <header>
        <h1>Projects</h1>
      </header>
    </section>
  );
};

export default Projects;
