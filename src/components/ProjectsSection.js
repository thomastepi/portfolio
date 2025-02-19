import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { projects, techStack } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
    },
  }),
};

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <FullScreenSection isDarkBackground p={8} spacing={8}>
      <Heading id="projects-section" mb={6}>
        {t("projects.heading")}
      </Heading>
      <MotionBox
        ref={ref}
        display="grid"
        css={{
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gridGap: 20,
          },
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: 40,
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card
              title={t(project.title)}
              description={t(project.description)}
              imageSrc={project.imageSrc}
              link={project.link}
              github={project.github}
              techStack={project.stack}
            />
          </MotionBox>
        ))}
      </MotionBox>
    </FullScreenSection>
  );
};

export default ProjectsSection;
