import React from "react";
import { Heading, Image, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

const Card = ({ title, description, imageSrc, link, github }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

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

  if (title && description && imageSrc) {
    return (
      <VStack
        w="90%"
        spacing={8}
        alignItems="flex-start"
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
      >
        <Image
          src={imageSrc}
          alt={`Preview of the ${title} project`}
          width="100%"
          height="100%"
        />
        <VStack padding="3" alignItems="flex-start" spacing={2}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          <HStack gap="5" py="2">
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
          </HStack>
        </VStack>
      </VStack>
    );
  }
  return null;
};

export default Card;
