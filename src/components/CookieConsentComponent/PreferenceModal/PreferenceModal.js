import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Switch,
  FormControl,
  FormLabel,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const PreferenceModal = ({
  isOpen,
  onClose,
  setAnalyticsEnabled,
  handleAccept,
  handleDecline,
  setConsentVisible,
}) => {
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleSavePreferences = () => {
    setAnalyticsEnabled(analyticsConsent);
    if (analyticsConsent) {
      handleAccept();
    } else {
      handleDecline();
    }
    setConsentVisible("hidden");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("preferencesModal.title")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="start" spacing={4}>
            <div>
              <FormControl display="flex" alignItems="center" isDisabled>
                <FormLabel htmlFor="essential-switch" mb="0">
                  {t("preferencesModal.essentialLabel")}
                </FormLabel>
                <Switch
                  id="essential-switch"
                  colorScheme="teal"
                  isChecked
                  isReadOnly
                />
              </FormControl>
              <Text fontSize="sm" color={isDarkMode ? "gray.300" : "gray.600"}>
                {t("preferencesModal.essentialDescription")}
              </Text>
            </div>

            <div>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="analytics-switch" mb="0">
                  {t("preferencesModal.analyticsLabel")}
                </FormLabel>
                <Switch
                  id="analytics-switch"
                  isChecked={analyticsConsent}
                  colorScheme="teal"
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                />
              </FormControl>
              <Text fontSize="sm" color={isDarkMode ? "gray.300" : "gray.600"}>
                {t("preferencesModal.analyticsDescription")}
              </Text>
            </div>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            colorScheme="teal"
            onClick={handleSavePreferences}
          >
            {t("preferencesModal.saveButton")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PreferenceModal;
