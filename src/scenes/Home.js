import React, { useEffect, useState } from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  TechStackSection,
  AboutMe,
  Alert,
  CookieConsentComponent,
} from "../components";
import ReactGA from "react-ga4";

function Home() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const initializeAnalytics = () => {
    if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
      ReactGA.initialize([
        {
          trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID,
          gaOptions: { anonymizeIp: true },
          gtagOptions: {
            send_page_view: true,
            cookie_domain: "auto",
            cookie_flags: "SameSite=None; Secure",
            cookie_expires: 63072000,
          },
        },
      ]);
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
      <CookieConsentComponent setAnalyticsEnabled={setAnalyticsEnabled} />
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <TechStackSection />
      <ContactMeSection />
      <Alert />
    </>
  );
}

export default Home;
