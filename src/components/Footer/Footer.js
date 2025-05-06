import React from "react";
import {
  Box,
  Button,
  Stack,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import socials from "../../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}>
      <Stack
        as="footer"
        margin="0 auto"
        px={12}
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        py={4}
        flexDir="column"
      >
        <Stack flexDir={"row"} mb={2} spacing={5}>
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </Stack>
        <Stack flexDir={useBreakpointValue({ base: "column", md: "row" })}>
          <p>Thomas Tepi • © 2024 - {new Date().getFullYear()}</p>
          <Divider
            display={useBreakpointValue({ base: "none", md: "block" })}
            borderColor={colorMode === "light" ? "gray.500" : "gray.600"}
            h="inherit"
            orientation="vertical"
          />
          <Button
            as={Link}
            size="sm"
            variant="link"
            color={colorMode === "light" ? "gray.700" : "gray.500"}
            to="/privacy-policy"
          >
            {t("privacyPolicy.title")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Footer;
