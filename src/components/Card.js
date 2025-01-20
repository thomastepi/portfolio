import React, { useState } from "react";
import {
  Heading,
  Image,
  Text,
  VStack,
  Link,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

const MotionVStack = motion(VStack);

const Card = ({ title, description, imageSrc, link, github }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  const handleGitHubClick = () => {
    ReactGA.event({
      category: "Link",
      action: `Clicked GitHub link for ${title} project`,
      label: `GitHub - ${title}`,
    });
  };

  const handleLiveDemoClick = () => {
    ReactGA.event({
      category: "Link",
      action: `Clicked Live Demo link for ${title} project`,
      label: `Live Demo - ${title}`,
    });
  };

  return (
    <MotionVStack
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      spacing={4}
      alignItems="flex-start"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      borderRadius="md"
      boxShadow="md"
      _hover={{
        boxShadow: "xl",
      }}
      overflow="hidden"
      w="100%"
      maxW="md"
      minH="420px"
    >
      <Image
        src={imageSrc}
        alt={`Preview of the ${title} project`}
        width="100%"
        height="180px"
        objectFit="cover"
      />
      <VStack padding="4" alignItems="flex-start" spacing={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{isExpanded ? description : truncatedDescription}</Text>
        {description.length > 100 && (
          <Button
            size="sm"
            variant="link"
            colorScheme="teal"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t("card.isExpanded") : t("card.isCollapsed")}
          </Button>
        )}
        <HStack gap={4} py={2}>
          {github && (
            <Link
              className="card-links github-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGitHubClick}
            >
              <FontAwesomeIcon
                className="github-icon"
                icon={faGithub}
                size="lg"
              />
              {t("card.githubTooltip")}
            </Link>
          )}
          {link && (
            <Link
              className="card-links live-demo-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveDemoClick}
            >
              <FontAwesomeIcon
                className="globe-icon"
                icon={faGlobe}
                size="lg"
              />
              {t("card.websiteTooltip")}
            </Link>
          )}
        </HStack>
      </VStack>
    </MotionVStack>
  );
};

export default Card;
