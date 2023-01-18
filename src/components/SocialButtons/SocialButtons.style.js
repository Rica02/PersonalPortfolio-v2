import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  div {
    position: relative;

    p {
      display: flex;
      opacity: 0;
      position: absolute;
      top: -32px;
      left: -6px;
      font-size: 12px;
      color: ${({ theme }) => theme.highlightSecondary};
      font-style: italic;
      transition: all 0.25s linear;
    }

    .icon {
      color: ${({ theme }) => theme.highlightSecondary};
      font-size: 25px;
      transition: all 0.25s linear;
    }
  }

  div:hover {
    p {
      opacity: 1;
    }
    .icon {
      cursor: pointer;
      background-color: ${({ theme }) => theme.btnHover};
      border: ${({ theme }) => theme.highlightSecondary} solid 1px;
      border-radius: 5px;
    }
  }
`;
