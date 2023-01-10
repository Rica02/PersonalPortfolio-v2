import React, { useState, useEffect } from "react";
import {
  Nav,
  NavExtended,
  NavbarExtendedButton,
  NavLinksContainer,
  NavLinksExtendedContainer,
  NavLink,
} from "./Navbar.style";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false); // Opens extended menu when screen is small
  const [linkSelected, setLinkSelected] = useState(false); // Called whenever a link is selected

  useEffect(() => {
    // Close extended menu after link selection
    setExtendNavbar(false);
  }, [linkSelected]);

  // Navbar links
  function Links() {
    return (
      <>
        <NavLink to="/" onClick={() => setLinkSelected(!linkSelected)}>
          home <span className="indicator">&lt;</span>
        </NavLink>
        <NavLink to="/aboutme" onClick={() => setLinkSelected(!linkSelected)}>
          about me <span className="indicator">&lt;</span>
        </NavLink>
        <NavLink to="/skills" onClick={() => setLinkSelected(!linkSelected)}>
          skills <span className="indicator">&lt;</span>
        </NavLink>
        <NavLink to="/projects" onClick={() => setLinkSelected(!linkSelected)}>
          projects <span className="indicator">&lt;</span>
        </NavLink>
        <NavLink to="/contactme" onClick={() => setLinkSelected(!linkSelected)}>
          contact me <span className="indicator">&lt;</span>
        </NavLink>
      </>
    );
  }

  return (
    <>
      {/* Side bar (wide screens)*/}
      <Nav>
        <NavLinksContainer>
          <Links />
        </NavLinksContainer>
      </Nav>

      {/* Extended menu (small screens) */}
      {extendNavbar && (
        <NavExtended>
          <NavLinksExtendedContainer>
            <Links />
          </NavLinksExtendedContainer>
        </NavExtended>
      )}

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
}
