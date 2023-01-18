import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const Container = styled.div`
  display: flex;
  height: 150px;
  width: 150px;
  background-color: ${({ theme }) => theme.highlightMain};
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  div {
    display: none;
    position: absolute;
    justify-content: center;
    bottom: 0;
    background-color: ${({ theme }) => theme.highlightMain};
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
    border: 2px solid ${({ theme }) => theme.highlightMain};

    div {
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    height: 120px;
    width: 120px;
  }
  // Makes sure projects are shown in two columns even in even smaller screens
  @media screen and (max-width: 350px) {
    height: 100px;
    width: 100px;
  }
`;
