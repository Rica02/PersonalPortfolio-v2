import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    margin: 0 0 20px 0;
  }
`;

export const MainBodyContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 65% 35%;
  width: 100%;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: ${({ theme }) => theme.bgDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-size: 30px;

  h1 {
    text-align: center;
    font-weight: normal;
    margin: 10px 0 25px 0;
  }

  p {
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  .helloWorldSml {
    display: none;
  }

  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 2;
    display: flex;
    position: relative;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: ${FontSizes.subheaderBig};
    }

    .helloWorldSml {
      display: flex;
      position: absolute;
      bottom: 15px;
    }
  }
`;

export const BackgroundContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 160px;

  p {
    font-size: 3.5vw;
    margin: 30px;
  }

  @media screen and (max-width: 900px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BottomContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  background-color: ${({ theme }) => theme.bgLighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 200px;
  padding-right: 160px;

  @media screen and (max-width: 900px) {
    align-items: center;
    padding: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 17%;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  font-size: ${FontSizes.body};
  font-weight: bold;
  background: none;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.bgBase};
  background-color: ${({ theme }) => theme.highlightSecondary};
  padding: 8px;
  margin-bottom: 15px;
  transition: all 0.25s linear;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.highlightMain};
    outline: ${({ theme }) => theme.highlightSecondary} 1px solid;
    outline-offset: 2.5px;
  }
`;

export const SocialContainer = styled.div`
  color: ${({ theme }) => theme.highlightSecondary};
  font-size: 40px;

  .icon {
    transition: all 0.25s linear;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.highlightMain};
      border: ${({ theme }) => theme.highlightSecondary} solid 1px;
      border-radius: 5px;
    }
  }
`;
