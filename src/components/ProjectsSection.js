import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "A Resume Builder powered by AI which helps you create a professional resume in minutes.",
    getImageSrc: () => require("../assets/images/resume-builder.png"),
    link: "https://resume-craft.onrender.com/",
  },
  {
    title: "FlashFeeds",
    description:
      `This project is aimed at providing a unique platform for users to share intriguing and lesser known
      facts, fostering a sense of discovery and knowledge sharing.`,
    getImageSrc: () => require("../assets/images/flashfeeds.png"),
    link: "https://github.com/thomastepi/FactShare_React_App.git",
  },
  {
    title: "Text Completion",
    description:
      "Elevate your writing, transcend language barriers, and embrace the future of text generation and translation.",
    getImageSrc: () => require("../assets/images/text-completion.png"),
    link: "https://github.com/thomastepi/textCompletion-translation-OpenAI.git",
  },
  {
    title: "BookHub",
    description:
      "This React application enables users to manage a book inventory by performing various actions like adding, updating, deleting, searching for books, and quitting the application.",
    getImageSrc: () => require("../assets/images/bookhub.png"),
    link: "https://github.com/thomastepi/book-management.git",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
