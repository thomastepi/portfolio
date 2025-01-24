import React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box
      bg="darkModeBg"
      color="whiteAlpha.900"
      p={6}
      borderRadius="md"
      maxW="100%"
      mx="auto"
      mt={8}
      boxShadow="lg"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Privacy Policy
      </Heading>

      <Text mb={4}>
        This website uses <strong>Google Analytics</strong> to collect
        anonymized data about website traffic, including:
      </Text>

      <UnorderedList mb={4}>
        <ListItem>The pages you visit.</ListItem>
        <ListItem>Your browser type and operating system.</ListItem>
        <ListItem>
          General user interactions, such as clicks and time spent on the
          website.
        </ListItem>
      </UnorderedList>

      <Text mb={4}>
        This information is used solely to analyze website performance and
        improve its content and functionality. No personally identifiable
        information (PII) is collected or stored.
      </Text>

      <Heading as="h2" size="md" mt={6} mb={4}>
        Data Collection
      </Heading>

      <Text mb={4}>Google Analytics may collect the following data:</Text>
      <UnorderedList mb={4}>
        <ListItem>
          Your approximate geographic location (based on your IP address, which
          is anonymized).
        </ListItem>
        <ListItem>
          Your device type, operating system, and browser version.
        </ListItem>
        <ListItem>
          Non-identifiable usage data such as interactions, referral sources,
          and session duration.
        </ListItem>
      </UnorderedList>

      <Heading as="h2" size="md" mt={6} mb={4}>
        IP Address Anonymization
      </Heading>

      <Text mb={4}>
        Your IP address is anonymized before being processed or stored by Google
        Analytics. This means that your exact location cannot be determined.
      </Text>

      <Heading as="h2" size="md" mt={6} mb={4}>
        Cookies
      </Heading>

      <Text mb={4}>
        Google Analytics sets cookies in your browser to track your usage of
        this website. These cookies store anonymized data and do not collect
        personal information.
      </Text>

      <Heading as="h2" size="md" mt={6} mb={4}>
        Third-Party Services
      </Heading>

      <Text mb={4}>
        Data collected by Google Analytics may be processed by Google on servers
        outside your country of residence. Google complies with relevant privacy
        and security standards. For further information, you can refer to
        <Link
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          color="teal.300"
        >
          Google’s Privacy Policy
        </Link>
        .
      </Text>

      <Heading as="h2" size="md" mt={6} mb={4}>
        Your Rights
      </Heading>

      <Text mb={4}>
        Depending on your location, you may have the following rights regarding
        your data:
      </Text>
      <UnorderedList mb={4}>
        <ListItem>
          The right to know what data is being collected and how it is used.
        </ListItem>
        <ListItem>
          The right to request that no cookies are placed on your device without
          your consent.
        </ListItem>
        <ListItem>
          The right to withdraw your consent at any time by clearing cookies in
          your browser.
        </ListItem>
      </UnorderedList>

      <Heading as="h2" size="md" mt={6} mb={4}>
        How to Opt-Out
      </Heading>

      <Text mb={4}>
        If you do not wish to have your website activity tracked, you can:
      </Text>
      <UnorderedList mb={4}>
        <ListItem>
          Decline cookies by clicking “Reject” in the cookie consent banner.
        </ListItem>
        <ListItem>
          Use
          <Link
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            color="teal.300"
          >
            Google’s Opt-Out Browser Add-on
          </Link>
          .
        </ListItem>
      </UnorderedList>

      <Text mt={8} fontSize="sm" textAlign="center">
        This Privacy Policy was last updated on [Insert Date].
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
