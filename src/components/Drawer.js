import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf as regularFilePdf } from "@fortawesome/free-regular-svg-icons";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, VStack, Button, HStack } from "@chakra-ui/react";
import socials from "../utils/socials";

const DrawerPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} bg="#18181b">
        {<FontAwesomeIcon icon={faBars} size="2x" />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#18181b">
          <DrawerCloseButton padding={5} size={3} color="white" />
          <DrawerBody marginTop={20}>
            <Box color="white" maxWidth="1280px" margin="0 auto">
              <VStack
                px={16}
                py={4}
                justifyContent="space-between"
                alignItems="center"
              >
                <nav>
                  <VStack spacing={7} align="left">
                    {socials.map((social) => (
                      <>
                        <a
                          key={social.url}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HStack spacing={4}>
                            <Text width={20} as="p" align="right">
                              {social.name}
                            </Text>
                            <FontAwesomeIcon icon={social.icon} size="2x" />
                          </HStack>
                        </a>
                      </>
                    ))}
                    <a
                      style={{ cursor: "pointer" }}
                      href="https://drive.google.com/file/d/1_voPs4yYDbnkrWva2DQS340yRVgRGGv9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HStack spacing={4}>
                        <Text width={20} as="p" align="right">
                          CV
                        </Text>
                        <FontAwesomeIcon icon={regularFilePdf} size="2x" />
                      </HStack>
                    </a>
                  </VStack>
                </nav>
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerPanel;
