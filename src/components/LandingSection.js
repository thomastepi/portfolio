import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Center,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FullScreenSection from "./FullScreenSection";

const MotionHeading = motion(Heading);
const MotionAvatar = motion(Avatar);

const LandingSection = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        w="100%"
      >
        <Center py="55px">
          <>
            <MotionHeading
              className="landing-greeting"
              size={useBreakpointValue({ base: "2xl", md: "4xl" })}
              align="center"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.9, delay: 2 }}
            >
              {t("landing.greeting")}
            </MotionHeading>
          </>
        </Center>
        <VStack px="10px">
          <MotionAvatar
            zIndex={-1}
            size="2xl"
            name="Thomas"
            src={"https://ik.imagekit.io/thormars/profile_photos/profile.jpg"}
            borderRadius={8}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <MotionHeading
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.9, delay: 2 }}
            align="center"
            size="xl"
          >
            {t("landing.bio1")}
          </MotionHeading>
          <MotionHeading
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.9, delay: 2 }}
            align="center"
            size="md"
          >
            {t("landing.bio2")}
          </MotionHeading>
        </VStack>
      </FullScreenSection>
    </Box>
  );
};

export default LandingSection;
