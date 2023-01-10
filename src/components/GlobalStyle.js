// Global styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: Roboto, "Open Sans", sans-serif;
  }

  /* .section {
    color: ${({ theme }) => theme.txtMain};
    background-color: ${({ theme }) => theme.bgBase};
  } */

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
