import React from "react";
import { Container } from "./ProjectThumbnail.style";

const ProjectThumbnail = (props) => {
  return (
    <Container>
      <img src={props.imgThumb} alt="project thumbnail" />
      <div>
        <p>{props.title}</p>
      </div>
    </Container>
  );
};

export default ProjectThumbnail;
