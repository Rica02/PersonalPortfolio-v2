import { ThemeProvider } from "styled-components";
import { Theme } from "./components/Theme";
import { GlobalStyles } from "./components/GlobalStyle";
import NavProvider from "./context/NavContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    // Provides theme colours
    <ThemeProvider theme={Theme}>
      {/* Checks which section is currently in view */}
      <NavProvider>
        {/* Styles used throughout the website */}
        <GlobalStyles />
        {/* Navigation bar */}
        <Navbar />
        {/* All screens */}
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
