import React from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  Alert,
} from "../components";

function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <TechStackSection />
      <ContactMeSection />
      <Alert />
    </>
  );
}

export default Home;
