import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
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
