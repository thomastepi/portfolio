import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Center,
  Box,
  useBreakpointValue,
  useColorMode,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FullScreenSection from "./FullScreenSection";

const MotionHeading = motion(Heading);
const MotionAvatar = motion(Avatar);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const LandingSection = () => {
  const { t } = useTranslation();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        w="100%"
      >
        <Center py="55px">
          <MotionHeading
            size={useBreakpointValue({ base: "2xl", md: "4xl" })}
            align="center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            mb="4"
          >
            {t("landing.greeting")}
          </MotionHeading>
        </Center>
        <VStack spacing={6} px="10px">
          <MotionAvatar
            size="2xl"
            name="Thomas"
            src="https://ik.imagekit.io/thormars/profile_photos/profile.jpg"
            borderRadius="full"
            shadow="xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <MotionText
            fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
            fontWeight="bold"
            color={
              useColorMode().colorMode === "light" ? "gray.700" : "gray.300"
            }
            textAlign="center"
            maxW="700px"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {t("landing.title")} 🌱
          </MotionText>
          <MotionText
            fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
            color={
              useColorMode().colorMode === "light" ? "gray.600" : "gray.400"
            }
            textAlign="center"
            maxW="600px"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t("landing.subTitle")}{" "}
          </MotionText>

          <MotionButton
            mt={4}
            colorScheme="teal"
            size="lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            onClick={handleClick("contactme")}
          >
            {t("landing.btnText")}
          </MotionButton>
        </VStack>
      </FullScreenSection>
    </Box>
  );
};

export default LandingSection;
