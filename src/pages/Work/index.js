import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  ImgsWrapper,
  MainBodyContainer,
  Projects,
  ProjectsWrapper,
  TitleContainer,
  ProjectList,
  ImgContainer,
} from "./Work.style";
import imgMockups from "../../assets/images/mockups.png";
import imgWireframes from "../../assets/images/wireframes.png";

const Work = () => {
  const workRef = useNav("work");

  return (
    <section id="work" ref={workRef}>
      <div className="container">
        <header>
          <h1>Work</h1>
        </header>
        <MainBodyContainer>
          <ProjectsWrapper>
            <Projects>
              <TitleContainer>
                <h2>My Projects</h2>
                <p>
                  Projects I've worked on individually or in a small team. These
                  were created from scratch, from design to development.
                </p>
              </TitleContainer>
              <ProjectList>
                <div className="test" />
                <div className="test" />
                <div className="test" />
                <div className="test" />
                <div className="test" />
                <div className="test" />
              </ProjectList>
            </Projects>
            <Projects>
              <TitleContainer>
                <h2>Other Projects</h2>
                <p>
                  Bigger projects I've contributed to working with a team in a
                  company for a client.
                </p>
              </TitleContainer>
              <ProjectList>
                <div className="test" />
                <div className="test" />
                <div className="test" />
              </ProjectList>
            </Projects>
          </ProjectsWrapper>
          <ImgsWrapper>
            <ImgContainer>
              <img src={imgWireframes} alt="wireframes example" />
            </ImgContainer>
            <ImgContainer>
              <img src={imgMockups} alt="mockups example" />
            </ImgContainer>
          </ImgsWrapper>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default Work;
