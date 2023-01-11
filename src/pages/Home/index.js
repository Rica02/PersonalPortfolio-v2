import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { useNav } from "../../hooks/useNav";
import {
  Container,
  BackgroundContainer,
  MainBodyContainer,
  IntroContainer,
  BottomContainer,
  ButtonsContainer,
  SocialContainer,
  ActionButton,
} from "./Home.style";
import resumeFile from "../../assets/resume.pdf";

const Home = () => {
  const homeRef = useNav("home");

  return (
    <section id="home" ref={homeRef}>
      <Container>
        <MainBodyContainer>
          <IntroContainer>
            <p>Hey there!</p>
            <h1>
              I'm <span className="txtHighlightMain">Rica</span>.
            </h1>
            <p>WEB & MOBILE APP DEVELOPER</p>
          </IntroContainer>
          <BackgroundContainer>
            <p className="txtFaded">
              <span className="txtHighlightSecondary">&gt;</span> hello world
              <span id="cursor" className="txtHighlightSecondary">
                |
              </span>
            </p>
          </BackgroundContainer>
          <BottomContainer>
            <ButtonsContainer>
              <ActionButton
                onClick={() => {
                  window.open(resumeFile, "_blank");
                }}
              >
                <IoMdDownload />
                &nbsp;RESUME
              </ActionButton>
              <ActionButton
                onClick={() =>
                  document
                    .getElementById("contactme")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <MdEmail />
                &nbsp;CONTACT
              </ActionButton>
              <SocialContainer>
                <FaLinkedin
                  className="icon"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/ricamaeaverion/",
                      "_blank"
                    );
                  }}
                />
                &nbsp;
                <FaGithubSquare
                  className="icon"
                  onClick={() => {
                    window.open("https://github.com/Rica02", "_blank");
                  }}
                />
              </SocialContainer>
            </ButtonsContainer>
          </BottomContainer>
        </MainBodyContainer>
      </Container>
    </section>
  );
};

export default Home;
