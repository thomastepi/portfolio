import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import DrawerPanel from "./Drawer";
import socials from "../utils/socials";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDown = currentScrollPos > prevScrollPos;
      setVisible(!scrollDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const translateY = visible ? "0" : "-200px";

  return (
    <>
      <Box
        ref={boxRef}
        position="fixed"
        top={0}
        left={0}
        right={0}
        transform={`translateY(${translateY})`}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
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
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handleClick("projects")}
                >
                  Projects
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handleClick("contactme")}
                >
                  Resume
                </a>
                {!isMobile && (
                  <a
                    style={{ cursor: "pointer" }}
                    href="https://drive.google.com/file/d/1_voPs4yYDbnkrWva2DQS340yRVgRGGv9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                )}
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Header;
