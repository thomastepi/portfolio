import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CookieConsentComponent = ({ setAnalyticsEnabled }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
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
      expires={90}
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
  );
};

export default CookieConsentComponent;
