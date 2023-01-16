import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 40px;
  //border: 1px solid red;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  border: 1px solid teal;

  h2 {
    font-size: ${FontSizes.headerSml};
    font-weight: normal;
    white-space: nowrap;
    padding-right: 20px;
  }
  p {
    font-size: ${FontSizes.bodySml};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MyProjectsContainer = styled.div`
  display: flex;
  //flex: 1;
  border: 1px solid blue;
`;

export const OtherProjectsContainer = styled.div`
  display: flex;
  //flex: 1;
  border: 1px solid blue;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 500px;
  max-height: 91vh;
  flex-direction: column;
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    //border: 2px solid ${({ theme }) => theme.highlightMain};
    width: 100%;

    flex: 1;
    overflow: hidden;

    img {
      height: max-content;
      margin-top: 0;
      transition: transform 0.3s;

      &:hover {
        margin-top: -200px;
        transform: scale(1.5);
        transition: margin 5s linear;
      }
    }

    #wireframeImg {
      width: 130%;
    }
    #mockupImg {
      width: 100%;
    }
  }
`;
