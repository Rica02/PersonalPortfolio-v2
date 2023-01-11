import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  justify-content: center;
  font-size: ${FontSizes.body};
  text-align: center;
  white-space: pre-wrap;

  .aboutMeName {
    font-size: ${FontSizes.title};
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: ${({ theme }) => theme.highlightSecondary} solid 1px;
  border-radius: 10px;
  text-align: center;
  padding: 0px 20px 20px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
    transform: translateY(-7px);
    transition: transform 0.5s;
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
`;

export const CardDescription = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  p {
    font-size: ${FontSizes.body};
    margin: 0;
    white-space: wrap;
  }
`;

export const BgTextContainer = styled.div`
  margin: 20px 0 40px 0;

  p {
    font-size: ${FontSizes.headerBig};
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: ${FontSizes.headerSml};
      text-align: center;
    }
  }
`;
