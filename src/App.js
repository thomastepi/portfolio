import React, { useEffect, useState } from "react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  Alert,
  Footer,
} from "./components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import "./App.css";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";  

if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
} else {
  console.warn("Google Analytics Measurement ID is not defined");
}

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  useEffect(() => {
    const consentGiven = document.cookie.includes("cookieConsent=true");
    if (consentGiven) {
      setAnalyticsEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (analyticsEnabled && process.env.REACT_APP_GA_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
  }, [analyticsEnabled]);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText={t("consent.accept")}
        declineButtonText={t("consent.decline")}
        enableDeclineButton
        cookieName="cookieConsent"
        style={{
          background: "#2C2F33",
          color: "#E2E8F0",
          fontSize: "14px",
          padding: "5px",
        }}
        buttonStyle={{
          background: "#61DAFB",
          color: "#1A202C",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        declineButtonStyle={{
          background: "#E53E3E",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "4px",
          marginLeft: "8px",
        }}
        expires={30}
        onAccept={() => setAnalyticsEnabled(true)}
        onDecline={() => setAnalyticsEnabled(false)}
      >
        {t("consent.message")}{" "}
        <span style={{ fontSize: "10px" }}>
          {t("consent.span")}{" "}
          <Button
            variant="link"
            color="teal.200"
            onClick={onOpen}
            style={{ textDecoration: "underline", fontSize: "10px" }}
          >
            {t("consent.policyButtonText")}
          </Button>
        </span>
      </CookieConsent>

      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button colorScheme="blue" onClick={onClose}>
              {t("policy.modalCloseButton")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <TechStackSection />
      <ContactMeSection />
      <Footer />
      <Alert />
    </>
  );
}

export default App;
