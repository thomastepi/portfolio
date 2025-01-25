import React, { useEffect, useState } from "react";
import {
  Header,
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  PrivacyPolicy,
  ManageCookies,
  Alert,
  Footer,
} from "./components";
import { Button, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const {
    isOpen: isPrivacyPolicyOpen,
    onOpen: openPrivacyPolicy,
    onClose: closePrivacyPolicy,
  } = useDisclosure();

  const {
    isOpen: isManageCookiesOpen,
    onOpen: openManageCookies,
    onClose: closeManageCookies,
  } = useDisclosure();
  const { t } = useTranslation();

  const initializeAnalytics = () => {
    if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID, {
        gaOptions: { anonymizeIp: true },
      });
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    } else {
      console.warn("Google Analytics Measurement ID is not defined");
    }
  };

  useEffect(() => {
    const consentGiven = document.cookie.includes("cookieConsent=true");
    if (consentGiven) {
      setAnalyticsEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (analyticsEnabled) {
      initializeAnalytics();
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
        acceptOnScroll={true}
        acceptOnScrollPercentage={25}
        style={{
          background: "#2C2F33",
          color: "#E2E8F0",
          fontSize: "14px",
          padding: "5px",
          zIndex: 2000,
        }}
        buttonStyle={{
          background: "#61DAFB",
          color: "#1A202C",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#A0AEC0",
          fontSize: "12px",
          padding: "6px 12px",
          borderRadius: "0px",
          marginLeft: "8px",
          border: "1px solid #A0AEC0",
        }}
        expires={30}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            setAnalyticsEnabled(true);
          } else {
            setAnalyticsEnabled(true);
          }
        }}
        onDecline={() => {
          setAnalyticsEnabled(false);
        }}
      >
        {t("consent.message")}{" "}
        <span style={{ fontSize: "10px" }}>
          {t("consent.span")}{" "}
          <Button
            variant="link"
            color="teal.200"
            onClick={openPrivacyPolicy}
            style={{ textDecoration: "underline", fontSize: "10px" }}
          >
            {t("consent.policyButtonText")}
          </Button>
        </span>
      </CookieConsent>

      <Button
        className="manage-cookies-button"
        onClick={openManageCookies}
        size={useBreakpointValue({ base: "xs", md: "md" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {t("consent.manage")}
      </Button>
      <PrivacyPolicy
        t={t}
        isOpen={isPrivacyPolicyOpen}
        onClose={closePrivacyPolicy}
      />
      <ManageCookies
        t={t}
        isOpen={isManageCookiesOpen}
        onClose={closeManageCookies}
        setAnalyticsEnabled={setAnalyticsEnabled}
      />

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
