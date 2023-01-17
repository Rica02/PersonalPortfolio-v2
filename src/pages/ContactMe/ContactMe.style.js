import styled from "styled-components";
import { FontSizes } from "../../components/Theme";

export const MainBodyContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.bgDarker};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${FontSizes.body};

  p {
    padding-bottom: 20px;
    font-size: ${FontSizes.body};
  }

  span {
    display: none;
    text-align: center;
    font-size: ${FontSizes.title};

    &.visible {
      display: block;
    }
  }

  @media screen and (max-height: 768px) {
    width: 100%;
    padding: 20px;

    p {
      font-size: ${FontSizes.body};
    }

    span {
      font-size: ${FontSizes.body};
    }
  }
`;

export const Input = styled.input`
  width: 500px;
  padding: 10px 20px;
  background-color: lightcyan;
  border: none;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: ${FontSizes.body};

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  border: 0;
  border-radius: 6px;
  padding: 10px 20px;
  margin-bottom: 20px;
  resize: vertical;
  font-size: ${FontSizes.body};
  background-color: lightcyan;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    height: 30vh;
  }
`;

export const SendButton = styled.input`
  cursor: pointer;
  color: ${({ theme }) => theme.highlightSecondary};
  background: ${({ theme }) => theme.bgBase};
  border: ${({ theme }) => theme.highlightSecondary} solid;
  border-radius: 6px;
  padding: 10px 30px;
  font-size: ${FontSizes.body};
  margin-bottom: 15px;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;
