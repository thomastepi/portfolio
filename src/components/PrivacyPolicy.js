import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Link,
  Heading,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
const PrivacyPolicy = ({ t, isOpen, onClose }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("policy.title")}</ModalHeader>
          <ModalBody>
            <Heading size="sm" mb={4}>
              {t("policy.name")}
            </Heading>
            <Text mb={4}>{t("policy.text1")}</Text>
            <Text mb={4}>{t("policy.text11")}</Text>
            <Text mb={4}>{t("policy.text2")}</Text>
            <Text>
              {t("policy.text3")}{" "}
              <Link
                href="https://policies.google.com/privacy"
                color="teal.400"
                isExternal
              >
                {t("policy.linkText")}
              </Link>
              .
            </Text>
            <Divider my={4} />
            <Heading size="sm" mb={4}>
              {t("localStorage.title")}
            </Heading>
            <Text mb={4}>{t("localStorage.intro")}</Text>
            <Text mb={4}>- {t("localStorage.preferences.colorMode")}</Text>
            <Text mb={4}>- {t("localStorage.preferences.language")}</Text>
            <Text mb={4}>{t("localStorage.disclaimer")} </Text>
            <Divider my={4} />

            <Text
              mt={4}
              fontSize="sm"
              color={colorMode === "light" ? "gray.600" : "gray.400"}
            >
              {t("localStorage.lastUpdated")}{" "}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={onClose}>
              {t("policy.modalCloseButton")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
