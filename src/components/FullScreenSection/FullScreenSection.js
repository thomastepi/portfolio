import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, ...boxProps }) => {
  return (
    <VStack>
      <VStack
        maxWidth="1280px"
        minHeight="100vh"
        {...boxProps}
        justify="center"
        align="center"
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
