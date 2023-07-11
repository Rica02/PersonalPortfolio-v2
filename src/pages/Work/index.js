import React, { useEffect, useState } from "react";
import {
  MainBodyContainer,
  Projects,
  TitleContainer,
  ProjectList,
  Modal,
  DarkOverlay,
} from "./Work.style";
import { useNav } from "../../hooks/useNav";
import ProjectThumbnail from "../../components/ProjectThumbnail";
import { ProjectContent } from "../../components/Content";
import ProjectModal from "../../components/ProjectModal";

const Work = () => {
  const workRef = useNav("work");
  const [modalActive, setModalActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Disable scrolling while modal is open
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalActive, selectedProject]);

  // On click, open project details modal
  const onProjectClick = (project) => {
    setModalActive(true);
    setSelectedProject(project);
  };

  // Close modal and reset selected project
  const onProjectClose = () => {
    setModalActive(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" ref={workRef} style={{ position: "relative" }}>
      {/* Project details modal */}
      <Modal className={modalActive ? "modal-active" : ""}>
        <ProjectModal {...selectedProject} onProjectClose={onProjectClose} />
      </Modal>
      {/* This adds a dark overlay to the background when modal is open */}
      <DarkOverlay
        className={modalActive ? "overlay-active" : ""}
        onClick={onProjectClose}
      />
      <div className="container">
        <header>
          <h1>Work</h1>
        </header>
        <MainBodyContainer>
          {/* Projects */}
          <Projects>
            <TitleContainer>
              <h2>Projects</h2>
              <p>Projects I have or am working on.</p>
            </TitleContainer>
            <ProjectList>
              {ProjectContent.OtherProjectList.map((project, index) => (
                <ProjectThumbnail
                  key={index}
                  {...project}
                  onClick={() => onProjectClick(project)}
                />
              ))}
            </ProjectList>
          </Projects>
          {/* My projects */}
          <Projects>
            <TitleContainer>
              <h2>My Projects</h2>
              <p>
                Personal projects I've worked on individually or in a small
                team.
              </p>
            </TitleContainer>
            <ProjectList>
              {ProjectContent.MyProjectList.map((project, index) => (
                <ProjectThumbnail
                  key={index}
                  {...project}
                  onClick={() => onProjectClick(project)}
                />
              ))}
            </ProjectList>
          </Projects>
          {/* <ImgsWrapper>
            <ImgContainer>
              <img src={imgWireframes} alt="wireframes example" />
            </ImgContainer>
            <ImgContainer>
              <img src={imgMockups} alt="mockups example" />
            </ImgContainer>
          </ImgsWrapper> */}
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default Work;
