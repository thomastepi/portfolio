import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import TitleWrapper from "../layout/TitleWrapper/TitleWrapper";
import TechStackSection from "../TechStackSection/TechStackSection";
import { motion } from "framer-motion";
import FullScreenSection from "../FullScreenSection/FullScreenSection";
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
    <FullScreenSection w="90%" my="6rem">
      <TitleWrapper my="6rem">
        <MotionHeading
          id="about-me-section"
          as="h2"
          size="xl"
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
      </TitleWrapper>
      <MotionBox
        spacing={8}
        maxW="1200px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={9}
          alignItems="stretch"
        >
          <GridItem>
            <MotionImage
              src="https://ik.imagekit.io/thormars/portfolio/selfie.jpg"
              alt="Thomas Tepi"
              borderRadius="5px"
              width="100%"
              height="100%"
              maxH="500px"
              objectFit="cover"
              boxShadow="lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
            />
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="flex-start" h="100%">
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph1")}{" "}
                <Button
                  as={Link}
                  href="https://guidefox.io"
                  variant="link"
                  isExternal
                  colorScheme="teal"
                  fontStyle={"italic"}
                >
                  Guidefox
                </Button>
              </MotionText>
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph2")}
              </MotionText>
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph3")}
              </MotionText>
              <Box mt="auto">
                {" "}
                <TechStackSection />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </MotionBox>
    </FullScreenSection>
  );
};

export default AboutMe;
