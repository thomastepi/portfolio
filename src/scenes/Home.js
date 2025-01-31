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

import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";

function Home() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

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
