import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgDarker};
  text-align: center;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  max-height: 250px;
  padding: 20px 40px 10px 40px;

  .skillDesc {
    font-size: ${FontSizes.body};
    max-width: 900px;
    line-height: 150%;
  }

  .bgText {
    font-size: 2vw;
    margin: 0;
    text-align: right;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-height: fit-content;
    padding: 20px 20px 10px 20px;

    .bgText {
      font-size: ${FontSizes.headerSml};
    }
  }
`;

export const SkillsContainer = styled.div`
  background-color: ${({ theme }) => theme.bgBase};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 40px 20px 40px;

  > p {
    font-size: ${FontSizes.body};
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`;

export const SkillListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillRow = styled.div`
  display: flex;
  padding: 5px 10px;

  :last-child {
    .lineSeparatorLrg {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RowTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  p {
    font-size: ${FontSizes.body};
    text-align: center;
    margin: 0;
  }

  .lineSeparatorSml {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .lineSeparatorSml {
      display: flex;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.highlightSecondary};
      margin: 10px 0;
    }
  }
`;

export const RowList = styled.div`
  display: flex;
  flex-wrap: wrap;

  .lineSeparatorLrg {
    margin-top: 10px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.highlightSecondary};
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 5px 0 20px 0;

    .lineSeparatorLrg {
      display: none;
    }
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  padding: 5px;

  img {
    height: 50px;
    object-fit: contain;
    transition: all 0.25s;

    &:hover {
      transform: scale(1.2);
    }
  }

  p {
    font-size: ${FontSizes.bodySml};
    text-align: center;
    margin: 10px 0 0 0;
    color: ${({ theme }) => theme.txtSecondary};
  }
`;
