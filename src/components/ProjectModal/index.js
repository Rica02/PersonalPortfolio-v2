import React from "react";
import {
  Container,
  DescContainer,
  GalleryContainer,
  RightContainer,
  TitleContainer,
  LeftContainer,
  Wrapper,
  VideoContainer,
} from "./ProjectModal.style";

const ProjectModal = (props) => {
  return (
    <Container>
      <TitleContainer>{props.title}</TitleContainer>
      <Wrapper>
        <LeftContainer
          className={props.mobileVideo ? "mobile-video" : "web-video"}
        >
          <VideoContainer>
            <video key={props.videoUrl} controls autoPlay loop muted>
              <source src={props.videoUrl} type="video/mov" />
              <source src={props.videoUrl} type="video/mp4" />
              <p>
                Sorry, it looks like your browser doesn't support this embedded
                video.
              </p>
            </video>
          </VideoContainer>
          {!props.mobileVideo && <GalleryContainer>gallery</GalleryContainer>}
        </LeftContainer>
        <RightContainer>
          <DescContainer>info</DescContainer>
          {props.mobileVideo && <GalleryContainer>gallery</GalleryContainer>}
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectModal;
