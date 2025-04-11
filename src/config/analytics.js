import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
    ReactGA.initialize([
      {
        trackingId: process.env.REACT_APP_GA_MEASUREMENT_ID,
        gaOptions: { anonymizeIp: true },
        gtagOptions: {
          send_page_view: false,
          cookie_domain: "auto",
          cookie_flags: "SameSite=None; Secure",
          cookie_expires: 63072000,
        },
      },
    ]);

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
    });

    console.log("GA4 Initialized with Default Consent Mode");
  } else {
    console.warn("Google Analytics Measurement ID is not defined");
  }
};

export const updateAnalyticsConsent = (userConsent) => {
  window.gtag("consent", "update", {
    analytics_storage: userConsent ? "granted" : "denied",
    ad_storage: "denied",
  });

  if (userConsent) {
    ReactGA.send("pageview");
    console.log("GA4 Consent Updated: Tracking Enabled");
  } else {
    console.log("GA4 Consent Updated: Tracking Disabled");
  }
};
