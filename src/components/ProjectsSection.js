import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import projects from "../utils/projects";

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <FullScreenSection isDarkBackground p={8} spacing={8}>
        <Heading id="projects-section">{t("projects.heading")}</Heading>
        <Box
          display="grid"
          css={{
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gridGap: 20,
            },
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridGap: 40,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              title={t(project.title)}
              description={t(project.description)}
              imageSrc={project.imageSrc}
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
