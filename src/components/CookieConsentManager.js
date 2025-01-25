import React from "react";
import CookieConsent, {
  resetCookieConsentValue,
  getCookieConsentValue,
} from "react-cookie-consent";
import { Button } from "@chakra-ui/react";

const CookieConsentManager = ({ show, onAccept, onDecline, t, onOpen }) => {
console.log("showConsent", getCookieConsentValue("cookieConsent"));

  return (
    <>
      {show && (
        <CookieConsent
          key={show}
          location="bottom"
          buttonText={t("consent.accept")}
          declineButtonText={t("consent.decline")}
          enableDeclineButton
          cookieName="cookieConsent"
          visible="hidden"
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
          onAccept={onAccept}
          onDecline={onDecline}
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
      )}
    </>
  );
};

export const resetConsent = () => {
  resetCookieConsentValue();
};

export default CookieConsentManager;
