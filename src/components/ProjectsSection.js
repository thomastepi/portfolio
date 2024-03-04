import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "An innovative AI-powered resume builder, provides a secure platform for users to log in, update their profiles, and create professional resumes. With the option to choose from existing templates or generate a personalized one using advanced AI algorithms, ResumeCraft ensures that resumes are tailored to each user's unique profile. ",
    getImageSrc: () => require("../assets/images/resume-builder.png"),
    link: "https://resume-craft.onrender.com/",
  },
  {
    title: "BookMart",
    description:
      "A secure and user-friendly book management application that allows users to log in securely and perform essential CRUD (Create, Read, Update, Delete) operations on their book inventory. With an intuitive interface, users can easily add new books, update existing entries, and remove items they no longer need.",
    getImageSrc: () => require("../assets/images/bookmart.png"),
    link: "https://bookmart-trw5.onrender.com",
  },
  {
    title: "FlashFeeds",
    description: `This project is aimed at providing a unique platform for users to share intriguing and lesser known
      facts, fostering a sense of discovery and knowledge sharing.`,
    getImageSrc: () => require("../assets/images/flashfeeds.png"),
    link: "https://github.com/thomastepi/FactShare_React_App.git",
  },
  {
    title: "Text Craft",
    description:
      "An advanced text completion tool, offers users a secure environment to fine-tune their text generation experience. Upon logging in, users can adjust token limits and set the randomness level, providing a personalized and controlled approach to generating text content. ",
    getImageSrc: () => require("../assets/images/text-completion.png"),
    link: "https://github.com/thomastepi/textCompletion-translation-OpenAI.git",
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
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
