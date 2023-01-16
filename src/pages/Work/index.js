import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  ImgContainer,
  MainBodyContainer,
  MyProjectsContainer,
  OtherProjectsContainer,
  ProjectsContainer,
  TitleContainer,
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
          <ProjectsContainer>
            <MyProjectsContainer>
              <TitleContainer>
                <h2>My Projects</h2>
                <p>
                  Projects I've worked on individually or in a small team. These
                  were created from scratch, from design to development.
                </p>
              </TitleContainer>
            </MyProjectsContainer>
            <OtherProjectsContainer>
              <TitleContainer>
                <h2>Projects I've worked on</h2>
                <p>
                  Projects I've contributed to working with a bigger team in a
                  company.
                </p>
              </TitleContainer>
            </OtherProjectsContainer>
          </ProjectsContainer>
          <ImgContainer>
            <div>
              <img
                id="wireframeImg"
                src={imgWireframes}
                alt="wireframes example"
              />
            </div>
            <div>
              <img id="mockupImg" src={imgMockups} alt="mockups example" />
            </div>
          </ImgContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default Work;
