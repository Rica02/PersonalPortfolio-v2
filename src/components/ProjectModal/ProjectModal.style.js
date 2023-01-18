import styled from "styled-components";
import { FontSizes } from "../Theme";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  font-size: ${FontSizes.subheaderBig};
  text-align: center;
  margin: 0 auto;
  padding: 0 30px 10px 30px;
  border-bottom: ${({ theme }) => theme.highlightSecondary} 1px solid;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.mobile-video {
    flex: 1;
  }
  &.web-video {
    flex: 2;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: black;

  video {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 2;
`;

export const DescContainer = styled.div`
  display: flex;
  flex: 2;
  border: black 1px solid;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex: 1;
  border: black 1px solid;
`;
