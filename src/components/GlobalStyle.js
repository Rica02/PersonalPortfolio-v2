// Global styles
import { createGlobalStyle } from "styled-components";

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

    h1 {
      margin: 0
    }
  }

  header {
    background-color: ${({ theme }) => theme.bgLighter};
    display: flex;
    align-items: center;
    height: 120px;
    padding: 60px;
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
  }
`;
