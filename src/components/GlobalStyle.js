// Global styles
import { createGlobalStyle } from "styled-components";
import { FontSizes } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: Roboto, "Open Sans", sans-serif;
  }

  section {
    color: ${({ theme }) => theme.txtMain};
    background-color: ${({ theme }) => theme.bgBase};
    min-height: 100vh;
  }

  header {
    background-color: ${({ theme }) => theme.bgLighter};
    display: flex;
    align-items: center;
    height: 90px;
    padding-left: 120px;

    h1 {
      margin: 0;
      font-size: ${FontSizes.headerBig};
    }

    @media screen and (max-width: 768px) {
      height: 60px;
      justify-content: center;
      padding: 0;

      h1 {
        font-size: ${FontSizes.headerSml};
      }

    }
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-right: 160px;

    @media screen and (max-width: 900px) {
      margin-right: 0;
    }
  }

  // Text highlights
  .txtHighlightMain {
    color: ${({ theme }) => theme.highlightMain};
  }

  .txtHighlightSecondary {
    color: ${({ theme }) => theme.highlightSecondary};
  }

  .txtFaded {
    font-family: monospace;
    opacity: 0.2;
    cursor: default;
  }
`;
