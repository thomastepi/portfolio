import React from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Footer = ({ openManageCookies, openPrivacyPolicy, t }) => {
  const { colorMode } = useColorMode();
  return (
    <Box backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}>
      <Flex
        as="footer"
        margin="0 auto"
        px={12}
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        //height={20}
        paddingY={4}
        flexDir="column"
      >
        <p>Thomas Tepi • © 2024 - {new Date().getFullYear()}</p>
        <HStack
          maxW="50%"
          justify="space-between"
          spacing={useBreakpointValue({ base: 2, md: 7 })}
          mt={2}
          flexDir={useBreakpointValue({ base: "column", md: "row" })}
        >
          <Button
            size="sm"
            variant="link"
            color={colorMode === "light" ? "gray.700" : "gray.500"}
            onClick={openPrivacyPolicy}
          >
            {t("policy.title")}
          </Button>
          <Button
            size="sm"
            variant="link"
            color={colorMode === "light" ? "gray.700" : "gray.500"}
            onClick={openManageCookies}
          >
            {t("consent.manage")}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Footer;
