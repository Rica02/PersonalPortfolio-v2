import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
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
import { useNav } from "../../hooks/useNav";
import resumeFile from "../../assets/resume.pdf";

const Home = () => {
  const homeRef = useNav("home");

  // Background text
  const HelloWorld = () => {
    return (
      <p className="txtFaded">
        <span className="txtHighlightSecondary">&gt;</span> hello world
        <span id="cursor" className="txtHighlightSecondary">
          |
        </span>
      </p>
    );
  };

  return (
    <section id="home" ref={homeRef}>
      <Container>
        <MainBodyContainer>
          {/* Introduction */}
          <IntroContainer>
            <p>Hey there!</p>
            <h1>
              I'm <span className="txtHighlightMain">Rica</span>.
            </h1>
            <p>FRONT-END AND UI/UX DEVELOPER</p>
            <p>
              Web <span className="txtHighlightMain">|</span> Mobile Apps{" "}
              <span className="txtHighlightMain">|</span> Games
            </p>
            <div className="helloWorldSml">
              <HelloWorld />
            </div>
          </IntroContainer>
          {/* Background text */}
          <BackgroundContainer>
            <HelloWorld />
          </BackgroundContainer>
          <BottomContainer>
            {/* Social buttons */}
            <ButtonsContainer>
              <ActionButton
                onClick={() => {
                  window.open(resumeFile, "_blank");
                }}
              >
                <HiDocumentText />
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
