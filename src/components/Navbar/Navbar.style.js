import styled from "styled-components";
import { FontSizes } from "../Theme";

export const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  padding-bottom: 80px;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.bgNavbar};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavExtended = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.bgNavbar};
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavbarExtendedButton = styled.div`
  display: block;
  width: 70px;
  height: 50px;
  font-size: 45px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  margin: 5px;

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.txtMain};
    background: none;
    border: none;
    font-size: ${FontSizes.headerBig};
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 35px;
`;

export const NavLinksExtendedContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const NavLink = styled.p`
  margin: 5px 0;
  direction: rtl;
  text-align: left;
  color: ${({ theme }) => theme.txtMain};
  text-decoration: none;
  font-size: ${FontSizes.body};
  .indicator {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.highlightMain};
    transform: translateX(3px);
    transition: all 0.2s linear;
    .indicator {
      display: inline-block;
    }
  }

  &.active {
    color: ${({ theme }) => theme.highlightMain};
    .indicator {
      display: inline-block;
    }
  }

  @media screen and (max-width: 900px) {
    margin: 15px 0;
    font-size: ${FontSizes.title};
  }

  @media screen and (max-width: 768px) {
    margin: 25px 0;
    font-size: ${FontSizes.headerSml};
  }
`;
