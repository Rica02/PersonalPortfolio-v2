import styled from "styled-components";
import { FontSizes } from "../Theme";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;

  h2 {
    flex: 1;
    font-size: ${FontSizes.subheaderBig};
    text-align: center;
    font-weight: normal;
    padding-bottom: 10px;
    margin: 0 30px;

    //border: black solid 1px;
    border-bottom: ${({ theme }) => theme.highlightSecondary} 1px solid;
  }

  .icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: white;
    color: ${({ theme }) => theme.highlightMain};
    cursor: pointer;
    transition: all 0.1s linear;
    border-radius: 100px;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.highlightMain};
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      padding: 10px 0;
      font-size: ${FontSizes.subheaderSml};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 15px 15px 15px;
  //background-color: black;

  video {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px 10px 20px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: ${(props) => (props.mobileVideo ? 2 : 1)};
  flex-direction: column;
  gap: 20px;
  padding: 5px 20px 20px 20px;
  border: black 1px solid;

  @media screen and (max-width: 768px) {
    flex: 2;
    flex-direction: column;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: black 1px solid;

  p {
    margin: 0;
    font-size: ${FontSizes.body};
    line-height: 150%;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const ToolsUsed = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  img {
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 35px;
    }
  }
`;

export const SourceButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  font-size: ${FontSizes.body};
  color: ${({ theme }) => theme.highlightSecondary};
  border: ${({ theme }) => theme.highlightSecondary} solid 1px;
  background-color: ${({ theme }) => theme.bgBase};
  border-radius: 10px;
  padding: 8px 15px;
  transition: all 0.25s linear;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export const GalleryContainer = styled.div`
  display: ${(props) => (props.mobileVideo ? "none" : "flex")};
  flex: 1;
  border: black 1px solid;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
