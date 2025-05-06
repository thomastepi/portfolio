import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./CookieConsentComponent.module.css";

const CookieConsentComponent = ({ setAnalyticsEnabled }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box className={styles.consentContainer}>
      <CookieConsent
        className={styles.CookieConsent}
        location="bottom"
        buttonText={t("consent.accept")}
        declineButtonText={t("consent.decline")}
        enableDeclineButton
        cookieName="cookieConsent"
        flipButtons
        expires={90}
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
          padding: "6px 12px",
          borderRadius: "0px",
        }}
        declineButtonStyle={{
          background: "#F6DED8",
          color: "#1A202C",
          fontSize: "14px",
          padding: "6px 12px",
          borderRadius: "0px",
          marginLeft: "8px",
        }}
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
            onClick={() => navigate("/privacy-policy")}
            fontSize="12px"
          >
            {t("consent.policyButtonText")}
          </Button>
        </span>
      </CookieConsent>
    </Box>
  );
};

export default CookieConsentComponent;
