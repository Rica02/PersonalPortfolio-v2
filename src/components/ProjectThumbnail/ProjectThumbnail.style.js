import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const Container = styled.div`
  display: flex;
  height: 150px;
  width: 150px;
  background-color: ${({ theme }) => theme.highlightMain};
  //border: 1.5px solid ${({ theme }) => theme.highlightMain};
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  div {
    display: none;
    position: absolute;
    //align-self: center;
    //height: 100%;
    align-items: center;
    justify-content: center;
    bottom: 0;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    //background-color: rgba(0, 0, 0, 0.5);
    //background-color: ${({ theme }) => theme.highlightMain};
    background-color: rgba(200, 50, 150, 0.5);
    width: 100%;
    padding: 5px 10px;

    p {
      font-size: ${FontSizes.bodySml};
      background-color: bla;
      margin: 0;
      color: white;
      text-align: center;
    }
  }

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.highlightMain};

    img {
      opacity: 0.8;
    }
    div {
      display: flex;
    }
  }

  // Makes sure projects are shown in two columns even in even smaller screens
  @media screen and (max-width: 390px) {
    height: 120px;
    width: 120px;
  }
`;
