import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import DrawerPanel from "./Drawer";
import ToggleColorMode from "./ToggleColorMode";
import { useColorMode } from "@chakra-ui/react";
import socials from "../utils/socials";
import ReactGA from "react-ga4";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      ReactGA.event({
        category: "Navigation",
        action: `Scrolled to ${anchor}`,
        label: `${anchor}-section`,
      });
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSocialsClick = (name) => {
    ReactGA.event({
      category: "Link",
      action: `Clicked ${name} link`,
      label: name,
    });
  };

  const handleSocialsHover = (name) => {
    ReactGA.event({
      category: "Hover",
      action: `Hovered over ${name} link`,
      label: name,
    });
  };

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}
      >
        <Box maxWidth="1280px" margin="0 auto">
          <HStack
            px={isMobile ? 5 : 16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              <HStack spacing={8}>
                {isMobile && <DrawerPanel />}
                {socials.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    onClick={handleSocialsClick(social.name)}
                    onMouseEnter={() => handleSocialsHover(social.name)}
                  >
                    {!isMobile && (
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    )}
                  </a>
                ))}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                {!isMobile && (
                  <>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleClick("projects")}
                    >
                      Projects
                    </a>
                    <a
                      style={{ cursor: "pointer", textAlign: "center" }}
                      onClick={handleClick("contactme")}
                    >
                      Contact Me
                    </a>
                    <a
                      style={{ cursor: "pointer" }}
                      href="https://drive.google.com/file/d/1qq4EXVJoe9Jh-GD1WIhVFCFt8yl909d3/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSocialsClick("Resume")}
                    >
                      Resume
                    </a>
                  </>
                )}
                <ToggleColorMode />
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Header;
