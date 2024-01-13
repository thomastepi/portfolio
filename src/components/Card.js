import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  if (title && description && imageSrc) {
    return (
      <VStack
        spacing={8}
        backgroundColor="white"
        borderRadius="md"
        boxShadow="lg"
        alignItems="flex-start"
        color="black"
      >
        <Image src={imageSrc} alt={title} borderRadius="md" width="100%" height="100%" />
        <VStack padding="3" alignItems="flex-start" spacing={2}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          <a href={link}>
            <HStack spacing={2}>
              <Text fontWeight="bold">Link / Live Demo</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </a>
        </VStack>
      </VStack>
    );
  }
  return null;
};

export default Card;
