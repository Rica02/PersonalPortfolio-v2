import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/Theme";
import { GlobalStyles } from "./components/GlobalStyle";
import NavProvider from "./context/NavContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";

function App() {
  // Blinking cursor effect
  useEffect(() => {
    var cursor = true;
    var speed = 1000;
    setInterval(() => {
      if (cursor) {
        document.getElementById("cursor").style.opacity = 0;
        cursor = false;
      } else {
        document.getElementById("cursor").style.opacity = 1;
        cursor = true;
      }
    }, speed);
  });

  return (
    // Theme colours
    <ThemeProvider theme={Theme}>
      {/* Navigation tracker */}
      <NavProvider>
        {/* Commonly used styles */}
        <GlobalStyles />
        {/* Navigation bar */}
        <Navbar />
        {/* All screens */}
        <Home />
        <AboutMe />
        <Skills />
        <Work />
        <ContactMe />
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
