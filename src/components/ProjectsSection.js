import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import projects from "../utils/projects";

const ProjectsSection = () => {
  return (
    <>
      <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        spacing={8}
      >
        <Heading id="projects-section">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          css={{
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gridGap: 20,
            },
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridGap: 30,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              link={project.link}
              github={project.github}
            />
          ))}
        </Box>
      </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
