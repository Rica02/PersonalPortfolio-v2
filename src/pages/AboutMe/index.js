import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  IntroContainer,
  Card,
  CardDescription,
  CardTitle,
  LowerContainer,
  BgTextContainer,
  CardsContainer,
} from "./AboutMe.style";
import { AboutMeContent } from "../../components/Content";

const AboutMe = () => {
  const aboutMeRef = useNav("aboutme");

  // Returns the 3 cards in About Me page
  function HobbyCards() {
    return (
      <>
        {AboutMeContent.CardContent.map((card, index) => (
          <Card key={index}>
            <CardTitle>
              <div className="icon">{card.icon}</div>
              <h2>{card.title}</h2>
            </CardTitle>
            <CardDescription>
              <p>{card.desc}</p>
            </CardDescription>
          </Card>
        ))}
      </>
    );
  }

  return (
    <section id="aboutme" ref={aboutMeRef}>
      <div className="container">
        <header>
          <h1>About me</h1>
        </header>
        <MainBodyContainer>
          <IntroContainer>
            <p className="aboutMeName">{AboutMeContent.Name}</p>
            <p>{AboutMeContent.Intro}</p>
          </IntroContainer>
          <LowerContainer>
            <CardsContainer>
              <HobbyCards />
            </CardsContainer>
            <BgTextContainer>
              <p className="txtFaded">
                <span className="txtHighlightSecondary">&gt;</span> continue (
                <span className="txtHighlightSecondary">Y</span>/
                <span className="txtHighlightSecondary">N</span>)?
              </p>
            </BgTextContainer>
          </LowerContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default AboutMe;
