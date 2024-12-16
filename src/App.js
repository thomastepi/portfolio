import React, { useEffect } from "react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  Alert,
  Footer,
} from "./components";
import "./App.css";
import styled from "styled-components";
import ReactGA from "react-ga4";

if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
} else {
  console.warn("Google Analytics Measurement ID is not defined");
}

const FONT_FAMILY = "'Montserrat', sans-serif";

const Wrapper = styled.main`
  font-family: ${FONT_FAMILY};
  h2,
  h1,
  h3 {
    font-family: ${FONT_FAMILY};
  }
`;

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <Wrapper>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactMeSection />
      <Footer />
      <Alert />
    </Wrapper>
  );
}

export default App;
