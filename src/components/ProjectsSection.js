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
    title: "Sawyer-Camp Farmers CIG",
    description: `Developed and launched a website for Sawyer Camp Farmers Common Initiative Group, empowering local farmers in Cameroon by showcasing their products and sustainable farming practices. Implemented user-friendly design and seamless navigation to enhance user experience and engagement.`,
    getImageSrc: () => require("../assets/images/sawyer-camp.png"),
    link: "https://github.com/thomastepi/sawyer-camp.git",
  },
  {
    title: "Annette's Beauty Salon",
    description:
      "This application showcases a curated gallery of exquisite hairstyles and services offered at Annette's Beauty Salon. As users explore the diverse range of braids and weaves, they can effortlessly schedule appointments, making the experience seamless and tailored to their preferences. ",
    getImageSrc: () => require("../assets/images/salon.png"),
    link: "https://github.com/thomastepi/salon-app.git",
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
