import React from "react";
import { useNav } from "../../hooks/useNav";
import {
  MainBodyContainer,
  LowerLeft,
  RightContainer,
  UpperLeft,
  Container,
  TableContainer,
  ToolCell,
  TableHeader,
} from "./Skills.style";
import { SkillsContent } from "../../components/Content";

const Skills = () => {
  const skillsRef = useNav("skills");

  function Row() {
    return (
      <>
        <table>
          {SkillsContent.Section.map((section, index) => (
            <tr key={index}>
              <TableHeader>{section.header}</TableHeader>
              {section.tools.map((tool, index) => (
                <td key={index}>
                  <ToolCell>
                    <img src={tool.img} />
                    <p>{tool.desc}</p>
                  </ToolCell>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </>
    );
  }

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container">
        <header>
          <h1>Skills</h1>
        </header>
        <MainBodyContainer>
          <UpperLeft>
            <p>{SkillsContent.SkillDesc}</p>
          </UpperLeft>
          <LowerLeft>
            <p className="txtFaded">loading...</p>
          </LowerLeft>
          <RightContainer>
            <div>
              <p>I have worked with the following tools:</p>
              <TableContainer>
                <Row />
              </TableContainer>
            </div>
          </RightContainer>
        </MainBodyContainer>
      </div>
    </section>
  );
};

export default Skills;
