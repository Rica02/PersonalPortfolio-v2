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
      {/* Title and X button */}
      <HeaderContainer>
        <h2>{props.title}</h2>
        <IoCloseSharp className="icon" onClick={props.onProjectClose} />
      </HeaderContainer>
      <Wrapper>
        {/* Video */}
        <LeftContainer>
          {props.videoUrl && (
            <video key={props.videoUrl} controls autoPlay loop muted>
              <source src={props.videoUrl} type="video/mov" />
              <source src={props.videoUrl} type="video/mp4" />
              <p>
                Sorry, it looks like your browser doesn't support this embedded
                video.
              </p>
            </video>
          )}
          {/* Alternative if video is not available */}
          {props.img && <img src={props.img} />}
        </LeftContainer>
        {/* Project info */}
        <RightContainer mobileVideo={props.mobileVideo}>
          <DescContainer>
            <p>{props.desc}</p>
            <ToolsUsed>
              <p>Tools used:</p>
              <div>
                {props.tools &&
                  props.tools.map((img, index) => (
                    <img key={index} src={img} alt="tool logo" />
                  ))}
              </div>
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
          {/* TODO: add image gallery */}
          {/* {props.gallery && props.gallery.length > 0 && ( */}
          {true > 0 && (
            <GalleryContainer>Image gallery coming soon...</GalleryContainer>
          )}
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectModal;
