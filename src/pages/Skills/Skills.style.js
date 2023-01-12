import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  grid-template-rows: auto 30%;
  height: 100%;
  margin-right: 160px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    margin: 0;
  }
`;

export const UpperLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  background-color: ${({ theme }) => theme.bgDarker};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 40px;
  white-space: pre-wrap;
  overflow: hidden;

  p {
    font-size: large;
    max-width: 450px;
  }

  @media screen and (max-width: 900px) {
    grid-area: 1 / 1 / 2 / 2;
    padding: 10px 30px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;

    p {
      font-size: small;
    }
  }
`;

export const LowerLeft = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  background-color: ${({ theme }) => theme.bgDarker};
  justify-content: center;
  align-items: center;

  p {
    font-size: 4vw;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  background-color: ${({ theme }) => theme.bgBase};
  grid-area: 1 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px 40px;
  overflow: hidden;

  p {
    font-size: larger;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
    height: 100%;

    p {
      font-size: medium;
      text-align: center;
      margin-bottom: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-area: 2 / 1 / 3 / 2;

    p {
      font-size: small;
    }
  }
`;

export const TableContainer = styled.div`
  justify-content: center;
  overflow: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const TableHeader = styled.th`
  width: 20%;
  font-size: large;
  font-weight: 400;

  @media screen and (max-width: 900px) {
    font-size: small;
  }
`;

export const ToolCell = styled.td`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80px;

  img {
    height: 50px;
    object-fit: contain;
  }
  p {
    font-size: small;
    text-align: center;
    margin: 5px 0;
    color: ${({ theme }) => theme.txtSecondary};
  }
  .system {
    font-size: large;
    color: ${({ theme }) => theme.highlightSecondary};
  }

  @media screen and (max-width: 900px) {
    img {
      height: 40px;
      object-fit: contain;
    }
    p {
      font-size: x-small;
    }
  }
`;
