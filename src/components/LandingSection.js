import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import pic from "../assets/images/pic.jpg";

const greeting = "Hello, I am Thomas!";
const bio1 = "A frontend developer";
const bio2 = "Bridging the Frontend & Backend with React & Node.js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" name="Thomas" src={pic} />
      <Heading size="md">{greeting}</Heading>
      <Heading size="xl">{bio1}</Heading>
      <Heading align='center' size="md">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
