import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const UpperContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  justify-content: center;
  font-size: ${FontSizes.body};
  text-align: center;
  white-space: pre-line;
  line-height: 150%;

  .aboutMeName {
    font-size: ${FontSizes.title};
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  max-width: 1200px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 20px 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: ${({ theme }) => theme.btnHover} solid 1px;
  border-radius: 10px;
  text-align: center;
  padding: 0px 20px 20px 20px;
  line-height: 150%;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
    transform: translateY(-10px);
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: ${FontSizes.title};
    font-weight: normal;
  }
  .icon {
    font-size: ${FontSizes.subheaderBig};
    margin-right: 10px;
    color: ${({ theme }) => theme.highlightMain};
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: ${FontSizes.body};
    }
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  p {
    font-size: ${FontSizes.body};
    margin: 0;
    white-space: pre-line;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: ${FontSizes.bodySml};
    }
  }
`;

export const BgTextContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  width: 100%;
  max-width: 1200px;

  p {
    font-size: 2.5vw;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    p {
      font-size: ${FontSizes.headerSml};
      margin: 10px 0 0 0;
    }
  }
`;
