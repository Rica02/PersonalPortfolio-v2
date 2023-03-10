import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  padding: 20px;
  gap: 20px;
  max-width: 1200px;
  position: relative;
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
  margin-bottom: 20px;

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

  @media screen and (max-width: 768px) {
    flex-direction: column;

    p {
      padding: 10px 0;
    }
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 1rem;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 120px);
  }

  @media screen and (max-width: 350px) {
    // Makes sure projects are shown in two columns even in even smaller screens
    grid-template-columns: repeat(2, 100px);
  }
`;

export const ImgsWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 500px;
  gap: 10px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    max-width: none;
  }
`;

export const DarkOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  &.overlay-active {
    display: block;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  top: -200%;
  left: 50%;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 900px;
  border: ${({ theme }) => theme.highlightMain} solid 1px;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
  transition: opacity 0.3s ease-in-out, top 1s ease-in-out,
    transform 1s ease-in-out;

  &.modal-active {
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.43, 1.19);
  }

  @media screen and (max-width: 768px) {
    top: 100%;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    background-color: ${({ theme }) => theme.bgDarker};
    border: none;
    opacity: 0;
    transform: none;
    // TODO: fix resizing bug (check position states)
    transition: opacity 20s, top 0.5s ease-in-out, transform 0s;

    &.modal-active {
      opacity: 1;
      top: 0%;
      transform: none;
      transition: opacity 0s, transform 0s, top 0.5s ease-in-out;
    }
  }
`;

// export const ImgContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   //flex: 1;
//   height: 45vh;
//   //border: 2px solid ${({ theme }) => theme.highlightMain};
//   background-color: white;
//   overflow: hidden;

//   img {
//     width: 100%;
//     object-position: top;
//     object-fit: cover;
//     margin-top: 0;
//     transition: transform 0.3s;

//     &:hover {
//       margin-top: -200px;
//       transform: scale(1.3);
//       transition: margin 5s linear;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     flex: 1;
//     height: 255px;
//   }
// `;
