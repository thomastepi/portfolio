import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, PrivacyPolicyPage, Error } from "./scenes";
import Layout from "./components/layout/Layout";
import { CookieConsentComponent } from "./components";
import { initializeAnalytics } from "./config/analytics";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

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
    <Router>
      <ScrollToTop />
      <CookieConsentComponent setAnalyticsEnabled={setAnalyticsEnabled} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
