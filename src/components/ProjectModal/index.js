import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import {
  Container,
  DescContainer,
  GalleryContainer,
  RightContainer,
  HeaderContainer,
  LeftContainer,
  Wrapper,
  SourceButton,
  ToolsUsed,
} from "./ProjectModal.style";

const ProjectModal = (props) => {
  return (
    <Container>
      <HeaderContainer>
        <h2>{props.title}</h2>
        <IoCloseSharp className="icon" onClick={props.onProjectClose} />
      </HeaderContainer>
      <Wrapper>
        <LeftContainer>
          <video key={props.videoUrl} controls autoPlay loop muted>
            <source src={props.videoUrl} type="video/mov" />
            <source src={props.videoUrl} type="video/mp4" />
            <p>
              Sorry, it looks like your browser doesn't support this embedded
              video.
            </p>
          </video>
        </LeftContainer>
        <RightContainer mobileVideo={props.mobileVideo}>
          <DescContainer>
            <p>{props.desc}</p>
            <ToolsUsed>
              <p>Tools used:</p>
              {props.tools &&
                props.tools.map((img, index) => (
                  <img key={index} src={img} alt="tool logo" />
                ))}
            </ToolsUsed>
            {props.sourceUrl && (
              <SourceButton
                onClick={() => {
                  window.open(props.sourceUrl, "_blank");
                }}
              >
                <BsGithub />
                &nbsp;View source
              </SourceButton>
            )}
          </DescContainer>
          {props.gallery && props.gallery.length > 0 && (
            <GalleryContainer>gallery</GalleryContainer>
          )}
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectModal;
