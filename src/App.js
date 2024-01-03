import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import styled from "styled-components";
import Projects from "./components/Projects/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
 linear-gradient(38.73deg, rgb(44 126 162 / 56%) 0%, rgb(12 12 156 / 82%) 50%), linear-gradient(141.27deg, rgb(0 70 209 / 15%) 50%, rgba(0, 70, 209, 0.15) 100%)
  width: 100%;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </Wrapper>

          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
