import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  DescriptionContainer,
  SkillsContainer,
  SkillListContainer,
  SkillRow,
  RowTitle,
  RowList,
  Skill,
  SkillList,
} from "./Skills.style";
import { SkillsContent } from "../../components/Content";

const Skills = () => {
  const skillsRef = useNav("skills");

  const Skills = () => {
    return (
      <SkillListContainer>
        {SkillsContent.Section.map((section, index) => (
          <SkillRow key={index}>
            <RowTitle>
              <p>{section.header}</p>
              <div className="lineSeparatorSml txtFaded" />
            </RowTitle>
            <RowList>
              {section.tools.map((tool, index) => (
                <SkillList key={index}>
                  <Skill>
                    <img src={tool.img} alt="tool logo" />
                    <p>{tool.desc}</p>
                  </Skill>
                </SkillList>
              ))}
              <div className="lineSeparatorLrg txtFaded" />
            </RowList>
          </SkillRow>
        ))}
      </SkillListContainer>
    );
  };

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container">
        <header>
          <h1>Skills</h1>
        </header>
        <MainBodyContainer>
          <DescriptionContainer>
            <p className="skillDesc">{SkillsContent.SkillDesc}</p>
            <p className="txtFaded bgText">loading...</p>
          </DescriptionContainer>
          <SkillsContainer>
            <p>I have worked with the following tools:</p>
            <Skills />
          </SkillsContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default Skills;
