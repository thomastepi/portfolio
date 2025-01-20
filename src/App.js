import React, { useEffect } from "react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  Alert,
  Footer,
} from "./components";
import "./App.css";
import ReactGA from "react-ga4";

if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
} else {
  console.warn("Google Analytics Measurement ID is not defined");
}

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <TechStackSection />
      <ContactMeSection />
      <Footer />
      <Alert />
    </>
  );
}

export default App;
