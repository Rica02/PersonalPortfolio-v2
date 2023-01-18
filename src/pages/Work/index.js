import React, { useEffect, useState } from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  Projects,
  TitleContainer,
  ProjectList,
  Modal,
  DarkOverlay,
} from "./Work.style";
import ProjectThumbnail from "../../components/ProjectThumbnail";
import { ProjectContent } from "../../components/Content";

const Work = () => {
  const workRef = useNav("work");
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    // Disable scrolling while modal is open
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalActive]);

  return (
    <section id="work" ref={workRef} style={{ position: "relative" }}>
      {/* Project details modal */}
      <Modal className={modalActive ? "modal-active" : ""}>
        <button onClick={() => setModalActive(false)}>dismiss</button>
      </Modal>
      {/* Adds dark overlay to background when modal is open */}
      <DarkOverlay className={modalActive ? "overlay-active" : ""} />
      <div className="container">
        <header>
          <h1>Work</h1>
        </header>
        <MainBodyContainer>
          <Projects>
            <TitleContainer>
              <h2>My Projects</h2>
              <p>
                Projects I've worked on individually or in a small team. These
                were created from scratch, from design to development.
              </p>
            </TitleContainer>
            <ProjectList>
              {ProjectContent.MyProjectList.map((project, index) => (
                <ProjectThumbnail
                  key={index}
                  {...project}
                  onClick={() => setModalActive(true)}
                />
              ))}
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
              {ProjectContent.OtherProjectList.map((project, index) => (
                <ProjectThumbnail
                  key={index}
                  {...project}
                  onClick={() => setModalActive(true)}
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
