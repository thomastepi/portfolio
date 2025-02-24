import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  HStack,
  useBreakpointValue,
  Button,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import DrawerPanel from "./Drawer";
import ToggleColorMode from "./ToggleColorMode";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import socials from "../data/socials";

import en_icon from "../assets/images/en.png";
import fr_icon from "../assets/images/fr.png";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleGoHome = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="sticky"
      boxShadow="md"
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={isMobile ? 4 : 16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {isMobile && <DrawerPanel />}
              {socials.map(
                (social) =>
                  !isMobile && (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      {!isMobile && (
                        <FontAwesomeIcon icon={social.icon} size="2x" />
                      )}
                    </a>
                  )
              )}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a style={{ cursor: "pointer" }} onClick={handleGoHome}>
                {t("header.home")}
              </a>
              {!isMobile && (
                <>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={handleClick("projects")}
                  >
                    {t("header.projects")}
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={handleClick("about-me")}
                  >
                    {t("header.aboutMe")}
                  </a>
                  <a
                    style={{ cursor: "pointer", textAlign: "center" }}
                    onClick={handleClick("contactme")}
                  >
                    {t("header.contactMe")}
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    href="https://drive.google.com/file/d/1qq4EXVJoe9Jh-GD1WIhVFCFt8yl909d3/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("header.resume")}
                  </a>
                </>
              )}
              <ToggleColorMode />
              <Button px={1} size="sm" onClick={toggleLanguage}>
                <Image
                  src={i18n.language === "en" ? fr_icon : en_icon}
                  alt={i18n.language === "en" ? "FR" : "EN"}
                  boxSize="20px"
                  mr={1}
                />
                {i18n.language === "en" ? "FR" : "EN"}
              </Button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
