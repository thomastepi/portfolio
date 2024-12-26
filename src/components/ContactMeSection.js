import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [submittedFirstName, setSubmittedFirstName] = React.useState("");
  const { t } = useTranslation();

  const inputBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.400", "gray.500");
  const focusBorderColor = useColorModeValue("blue.500", "blue.300");

  const btnBgColor = useColorModeValue("blue.500", "blue.300");
  const hoverBgColor = useColorModeValue("blue.600", "blue.400");
  const activeBgColor = useColorModeValue("blue.700", "blue.500");
  const textColor = useColorModeValue("white", "gray.900");

  const formik = useFormik({
    initialValues: { name: "", email: "", type: "", comment: "" },
    onSubmit: async (values) => {
      await submit(values);
      setSubmittedFirstName(values.name);
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contactMe.validation.requiredName")),
      email: Yup.string()
        .email(t("contactMe.validation.invalidEmail"))
        .required(t("contactMe.validation.requiredEmail")),
      type: Yup.string(),
      comment: Yup.string()
        .required(t("contactMe.validation.requiredComment"))
        .min(25, t("contactMe.validation.minComment")),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success" && submittedFirstName) {
        var message = t("contactMe.alerts.success", {
          name: submittedFirstName,
        });
        var type = "success";
        onOpen(type, message);
        formik.resetForm();
      } else if (response.type === "error") {
        var message = t("contactMe.alerts.error");
        var type = "error";
        onOpen(type, message);
      }
    }
  }, [response, submittedFirstName]);

  return (
    <FullScreenSection
      isDarkBackground
      css={{
        "@media (max-width: 768px)": {
          width: "90%",
        },
        width: "50%",
      }}
      pt={5}
      pb={16}
      spacing={8}
    >
      <VStack p="30px" w="100%">
        <Heading textAlign={"center"} as="h1" id="contactme-section">
          {t("contactMe.heading")}
        </Heading>
        <Box paddingTop={7} w="full">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={5}>
              <FormControl
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel htmlFor="name">
                  <span className="required-asterisk">* </span>
                  {t("contactMe.labels.name")}
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  {...formik.getFieldProps("name")}
                  bg={inputBg}
                  borderColor={borderColor}
                  _hover={{ borderColor: focusBorderColor }}
                  _focus={{ borderColor: focusBorderColor }}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">
                  <span className="required-asterisk">* </span>
                  {t("contactMe.labels.email")}
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  bg={inputBg}
                  borderColor={borderColor}
                  _hover={{ borderColor: focusBorderColor }}
                  _focus={{ borderColor: focusBorderColor }}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">
                  {t("contactMe.labels.type")}{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {" "}
                    {t("contactMe.optional")}
                  </span>
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  bg={inputBg}
                  borderColor={borderColor}
                  _hover={{ borderColor: focusBorderColor }}
                  _focus={{ borderColor: focusBorderColor }}
                >
                  <option value="jobOpportunity">
                    {t("contactMe.placeholders.select")}
                  </option>
                  <option value="hireMe">
                    {t("contactMe.placeholders.hireMe")}
                  </option>
                  <option value="feedback">
                    {t("contactMe.placeholders.feedback")}
                  </option>
                  <option value="other">
                    {t("contactMe.placeholders.other")}
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">
                  <span className="required-asterisk">* </span>
                  {t("contactMe.labels.message")}
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  bg={inputBg}
                  borderColor={borderColor}
                  _hover={{ borderColor: focusBorderColor }}
                  _focus={{ borderColor: focusBorderColor }}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                width="full"
                isLoading={isLoading}
                bg={btnBgColor}
                color={textColor}
                _hover={{ bg: hoverBgColor }}
                _active={{ bg: activeBgColor }}
              >
                {t("contactMe.buttons.send")}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
