import React, { useEffect, useState } from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  PrivacyPolicy,
  ManageCookies,
  Alert,
} from "../components";

import Layout from "../components/layout/Layout";

import { Button, useDisclosure } from "@chakra-ui/react";
import ReactGA from "react-ga4";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

function Home() {
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
    <Layout
      t={t}
      openManageCookies={openManageCookies}
      openPrivacyPolicy={openPrivacyPolicy}
    >
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
          background: "#F6DED8",
          color: "#1A202C",
          fontSize: "14px",
          padding: "6px 12px",
          borderRadius: "0px",
          marginLeft: "8px",
          border: "1px solid #A0AEC0",
        }}
        expires={30}
        onAccept={() => {
          setAnalyticsEnabled(true);
        }}
        onDecline={() => {
          setAnalyticsEnabled(false);
        }}
      >
        {t("consent.message")}{" "}
        <span style={{ fontSize: "14px" }}>
          {t("consent.span")}{" "}
          <Button
            variant="link"
            color="teal.200"
            onClick={openPrivacyPolicy}
            style={{ textDecoration: "underline", fontSize: "12px" }}
          >
            {t("consent.policyButtonText")}
          </Button>
        </span>
      </CookieConsent>

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
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <TechStackSection />
      <ContactMeSection />
      <Alert />
    </Layout>
  );
}

export default Home;
