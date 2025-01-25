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
} from "@chakra-ui/react";

const PrivacyPolicy = ({ t, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("policy.title")}</ModalHeader>
          <ModalBody>
            <Text mb={4}>{t("policy.text1")}</Text>
            <Text mb={4}>{t("policy.text2")}</Text>
            <Text>
              {t("policy.text3")}{" "}
              <Link
                href="https://policies.google.com/privacy"
                color= "teal.400"
                isExternal
              >
                {t("policy.linkText")}
              </Link>
              .
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
