import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 160px;
  height: 100vh;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const MainBodyContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 65% 35%;
  justify-content: stretch;
  height: 100%;
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
    margin: 0 0 20px 0;
  }

  p {
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 1 / 2;
  }
`;

export const BackgroundContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  p {
    font-size: 4vw;
    margin: 30px;
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

  @media screen and (max-width: 900px) {
    align-items: center;
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
  font-size: 16px;
  font-weight: bold;
  background: none;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.bgBase};
  background-color: ${({ theme }) => theme.highlightSecondary};
  padding: 8px 5px;
  margin-bottom: 15px;

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

  .icon:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.highlightMain};
    border: ${({ theme }) => theme.highlightSecondary} solid 1px;
    border-radius: 5px;
  }
`;
