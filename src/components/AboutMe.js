import React from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  useBreakpointValue,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const AboutMe = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      px={8}
      py={16}
    >
      <MotionHeading
        id="about-me-section"
        as="h2"
        size="xl"
        mb={8}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {t("aboutMe.heading")}
      </MotionHeading>
      <MotionBox
        spacing={8}
        maxW="1200px"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <HStack
          spacing={8}
          alignItems="center"
          justifyContent="center"
          flexDir={useBreakpointValue({ base: "column", md: "row" })}
        >
          <MotionBox flexShrink={0} variants={item}>
            <MotionImage
              src="https://ik.imagekit.io/thormars/portfolio/selfie.jpg"
              alt="Thomas Tepi"
              borderRadius="full"
              boxSize="300px"
              objectFit="cover"
              boxShadow="lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
            />
          </MotionBox>

          <VStack spacing={4} alignItems="flex-start" maxW="700px">
            <MotionText
              textAlign="justify"
              lineHeight="1.8"
              variants={item}
              viewport={{ once: true, amount: 0.5 }}
            >
              {t("aboutMe.paragraph1")}{" "}
              <Button
                as={Link}
                href="https://guidefox.io"
                variant="link"
                isExternal
                colorScheme="teal"
                fontStyle={"italic"}
              >
                Bluewave Guidefox
              </Button>
            </MotionText>
            <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
              {t("aboutMe.paragraph2")}
            </MotionText>
            <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
              {t("aboutMe.paragraph3")}
            </MotionText>
          </VStack>
        </HStack>
      </MotionBox>
    </FullScreenSection>
  );
};

export default AboutMe;
