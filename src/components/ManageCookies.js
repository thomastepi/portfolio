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
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  resetCookieConsentValue,
  getCookieConsentValue,
} from "react-cookie-consent";

const ManageCookies = ({ t, isOpen, onClose, setAnalyticsEnabled }) => {
  const deleteAllAnalyticsCookies = () => {
    window["ga-disable-" + process.env.REACT_APP_GA_MEASUREMENT_ID] = true;
    const currentDomain = window.location.hostname;

    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

      if (
        name.startsWith("_ga_") ||
        name.startsWith("_ga") ||
        name.startsWith("_gid")
      ) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${currentDomain};`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${currentDomain};`;
      }
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={useBreakpointValue({ base: "sm", md: "xl" })}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("manageCookie.title")}</ModalHeader>
          <ModalBody>
            <Text mb={4}>
              {getCookieConsentValue("cookieConsent") === "true"
                ? t("manageCookie.message.hadAccepted")
                : t("manageCookie.message.hadDeclined")}
            </Text>
            <Text mb={4}>{t("manageCookie.message.cookieDescription")}</Text>
            <Text>{t("manageCookie.message.updatePreference")}</Text>
          </ModalBody>
          <ModalFooter>
            {getCookieConsentValue("cookieConsent") === "true" ? (
              <Button
                size="sm"
                mr={3}
                bgColor="#FF7777"
                _hover={{ bgColor: "#FF5555" }}
                onClick={() => {
                  resetCookieConsentValue("cookieConsent");
                  deleteAllAnalyticsCookies();
                  setAnalyticsEnabled(false);
                  onClose();
                }}
              >
                {t("manageCookie.decline")}
              </Button>
            ) : (
              <Button
                size="sm"
                colorScheme="green"
                mr={3}
                onClick={() => {
                  setAnalyticsEnabled(true);
                  document.cookie = "cookieConsent=true; path=/";
                  onClose();
                }}
              >
                {t("manageCookie.accept")}
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={onClose}>
              {t("manageCookie.keepCurrent")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManageCookies;
