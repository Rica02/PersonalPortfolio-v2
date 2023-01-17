import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  IntroContainer,
  Card,
  CardDescription,
  CardTitle,
  BgTextContainer,
  CardsContainer,
  UpperContainer,
} from "./AboutMe.style";
import { AboutMeContent } from "../../components/Content";

const AboutMe = () => {
  const aboutMeRef = useNav("aboutme");

  // Returns the 3 cards in About Me page
  const Cards = () => {
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
  };

  return (
    <section id="aboutme" ref={aboutMeRef}>
      <div className="container">
        <header>
          <h1>About me</h1>
        </header>
        <MainBodyContainer>
          <UpperContainer>
            <IntroContainer>
              <p className="aboutMeName">{AboutMeContent.Name}</p>
              <p>{AboutMeContent.Intro}</p>
            </IntroContainer>
            <CardsContainer>
              <Cards />
            </CardsContainer>
          </UpperContainer>
          <BgTextContainer>
            <p className="txtFaded">
              <span className="txtHighlightSecondary">&gt;</span> continue (
              <span className="txtHighlightSecondary">Y</span>/
              <span className="txtHighlightSecondary">N</span>)?
            </p>
          </BgTextContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default AboutMe;
