import React, { useEffect } from "react";
import { Avatar, Heading, VStack, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import pic from "../assets/images/pic.jpg";
import styled from "styled-components";
import ReactGA from "react-ga4";
const greeting = "Hello, I am Thomas!";
const bio1 = "A frontend developer";
const bio2 = "Bridging the Frontend & Backend with React & Node.js";

const Greeting = styled.div`
  .greeting {
    font-family: "sacramento", cursive;
  }
`;

const LandingSection = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);
  return (
    <>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
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
          <Avatar size="2xl" name="Thomas" src={pic} borderRadius={0} />
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
