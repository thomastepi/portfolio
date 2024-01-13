import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Thomas!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" name="Thomas" src="https://thomastepi.github.io/my-bio/CSS-MySiteImages/mimsnatz.jpg" />
      <Heading size="md">{greeting}</Heading>
      <Heading size="xl">{bio1}</Heading>
      <Heading size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
