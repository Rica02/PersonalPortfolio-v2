import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
  //border: 1px solid red;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 20px;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgDarker};
  padding: 20px;
  flex: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    font-size: ${FontSizes.headerSml};
    font-weight: normal;
    white-space: nowrap;
    margin: 0;
  }
  p {
    font-size: ${FontSizes.bodySml};
    padding: 0 15px 0 30px;
    margin: 0;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  //border: 1px solid blue;

  .test {
    height: 150px;
    width: 150px;
    background-color: gray;
    border: 1px solid ${({ theme }) => theme.highlightMain};
  }
`;

export const ImgsWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 500px;
  //gap: 20px;
  flex-direction: column;
  //border: red 1px solid;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  //flex: 1;
  height: 45vh;
  //border: 2px solid ${({ theme }) => theme.highlightMain};
  background-color: white;
  overflow: hidden;

  img {
    width: 100%;
    object-position: top;
    object-fit: cover;
    margin-top: 0;
    transition: transform 0.3s;

    &:hover {
      margin-top: -200px;
      transform: scale(1.3);
      transition: margin 5s linear;
    }
  }
`;
