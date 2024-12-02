import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Thomas Tepi • © {new Date().getFullYear()}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
