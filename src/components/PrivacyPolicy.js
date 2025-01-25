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
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "teal" }}
              >
                {t("policy.linkText")}
              </a>
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
