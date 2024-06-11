import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  Alert,
  Footer,
} from "./components";
import { AlertProvider } from "./context/alertContext";
import styled from "styled-components";
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

const Wrapper = styled.main`
  font-family: "Montserrat", sans-serif;
  h2,
  h1,
  h3 {
    font-family: "montserrat", sans-serif;
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
    <ChakraProvider>
      <AlertProvider>
        <Wrapper>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </Wrapper>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
