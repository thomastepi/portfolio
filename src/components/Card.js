import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";

const Card = ({ title, description, imageSrc, link, github }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleGitHubClick = () => {
    ReactGA.event({
      category: "Link",
      action: `Clicked GitHub link for ${title} project`,
    });
  };

  const handleLiveDemoClick = () => {
    ReactGA.event({
      category: "Link",
      action: `Clicked Live Demo link for ${title} project`,
    });
  };

  const linkStyle = {
    fontSize: isHovered ? "17.5px" : "16px",
    transition: "font-size 0.3s",
    textDecoration: "none",
  };
  if (title && description && imageSrc) {
    return (
      <VStack
        spacing={8}
        backgroundColor="white"
        boxShadow="lg"
        alignItems="flex-start"
        color="black"
      >
        <Image src={imageSrc} alt={title} width="100%" height="100%" />
        <VStack padding="3" alignItems="flex-start" spacing={2}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          <Tooltip hasArrow label="GitHub Repo" placement="right">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGitHubClick}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
          </Tooltip>
          <Link
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleLiveDemoClick}
          >
            <HStack spacing={2} color="blue">
              <Text fontWeight="bold">Live Demo</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Link>
        </VStack>
      </VStack>
    );
  }
  return null;
};

export default Card;
