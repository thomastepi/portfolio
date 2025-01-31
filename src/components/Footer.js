import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}>
      <Flex
        as="footer"
        margin="0 auto"
        px={12}
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        paddingY={4}
        flexDir="column"
      >
        <p>Thomas Tepi • © 2024 - {new Date().getFullYear()}</p>
        <Button
          mt={2}
          as={Link}
          size="sm"
          variant="link"
          color={colorMode === "light" ? "gray.700" : "gray.500"}
          to="/privacy-policy"
        >
          {t("privacyPolicy.title")}
        </Button>
      </Flex>
    </Box>
  );
};
export default Footer;
