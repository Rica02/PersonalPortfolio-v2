import React, { useState, useEffect, useContext } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import {
  Nav,
  NavExtended,
  NavbarExtendedButton,
  NavLinksContainer,
  NavLinksExtendedContainer,
  NavLink,
  ButtonsContainer,
} from "./Navbar.style";
import { NavContext } from "../../context/NavContext";
import SocialButtons from "../SocialButtons";

const Navbar = () => {
  const { activeLinkId } = useContext(NavContext); // Current section ID in view
  const [extendNavbar, setExtendNavbar] = useState(false); // Opens extended menu when screen is small

  const navLinks = ["home", "about me", "skills", "work", "contact me"];

  useEffect(() => {
    // Disable scrolling while extended navbar menu is open
    if (extendNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [extendNavbar]);

  const handleClickNav = (target) => {
    // Scroll to selection and close menu (if using extended menu)
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    setExtendNavbar(false);
  };

  // Navbar links
  const Links = () => {
    // Note: section ID is the same as navLink name but without space
    return (
      <>
        {navLinks.map((link, key) => (
          <NavLink
            key={key}
            className={activeLinkId === link.replace(/\s/g, "") ? "active" : ""}
            onClick={() => handleClickNav(link.replace(/\s/g, ""))}
          >
            {link} <span className="indicator">&lt;</span>
          </NavLink>
        ))}
      </>
    );
  };

  return (
    <>
      {/* Side bar (wide screens)*/}
      <Nav>
        <ButtonsContainer className={activeLinkId === "home" ? "hidden" : ""}>
          <SocialButtons />
        </ButtonsContainer>
        <NavLinksContainer>
          <Links />
        </NavLinksContainer>
      </Nav>

      {/* Extended menu (small screens) */}

      <NavExtended className={extendNavbar ? "active" : ""}>
        <NavLinksExtendedContainer>
          <Links />
        </NavLinksExtendedContainer>
      </NavExtended>

      {/* Extended menu button */}
      <NavbarExtendedButton>
        <button
          onClick={() => {
            setExtendNavbar(!extendNavbar);
          }}
        >
          {
            extendNavbar ? <IoCloseSharp /> : <IoMenuSharp /> // Bars when menu is closed, X when open
          }
        </button>
      </NavbarExtendedButton>
    </>
  );
};

export default Navbar;
