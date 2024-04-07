import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import styled from "styled-components";

const Wrapper = styled.main`
  font-family: "Montserrat", sans-serif;
  h2,
  h1,
  h3 {
    font-family: "montserrat", sans-serif;
  }
`;

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Wrapper>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </Wrapper>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
