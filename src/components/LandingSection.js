import React from "react";
import { Avatar, Heading, VStack, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import styled from "styled-components";
const greeting = "Hello, I am Thomas!";
const bio1 = "A Full Stack Developer";
const bio2 = "Bridging the Frontend & Backend with React & Node.js";

const Greeting = styled.div`
  .greeting {
    font-family: "sacramento", cursive;
  }
`;

const LandingSection = () => {
  return (
    <>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        w="100%"
      >
        <Center py="55px">
          <Greeting>
            <Heading className="greeting" size="3xl">
              {greeting}
            </Heading>
          </Greeting>
        </Center>
        <VStack px="10px">
          <Avatar
            zIndex={-1}
            size="2xl"
            name="Thomas"
            src={"https://ik.imagekit.io/thormars/profile_photos/profile.jpg"}
            borderRadius={8}
          />
          <Heading size="xl">{bio1}</Heading>
          <Heading align="center" size="md">
            {bio2}
          </Heading>
        </VStack>
      </FullScreenSection>
    </>
  );
};

export default LandingSection;
