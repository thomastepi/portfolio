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
import { motion } from "framer-motion";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useTranslation } from "react-i18next";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionFormControl = motion(FormControl);
const MotionButton = motion(Button);

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [submittedFirstName, setSubmittedFirstName] = React.useState("");
  const { t } = useTranslation();

  const inputBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.400", "gray.500");
  const focusBorderColor = useColorModeValue("blue.500", "blue.300");

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
      <MotionHeading
        textAlign={"center"}
        as="h1"
        id="contactme-section"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {t("contactMe.heading")}
      </MotionHeading>
      <MotionBox
        p="30px"
        w="100%"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5}>
            <MotionFormControl
              isInvalid={formik.touched.name && formik.errors.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
            </MotionFormControl>
            <MotionFormControl
              isInvalid={formik.touched.email && formik.errors.email}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
            </MotionFormControl>
            <MotionFormControl
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FormLabel htmlFor="type">{t("contactMe.labels.type")}</FormLabel>
              <Select
                id="type"
                name="type"
                {...formik.getFieldProps("type")}
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: focusBorderColor }}
                _focus={{ borderColor: focusBorderColor }}
              >
                <option value="">{t("contactMe.placeholders.select")}</option>
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
            </MotionFormControl>
            <MotionFormControl
              isInvalid={formik.touched.comment && formik.errors.comment}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.8 }}
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
            </MotionFormControl>
            <MotionButton
              type="submit"
              width="full"
              colorScheme="teal"
              isLoading={isLoading}
              color={textColor}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {t("contactMe.buttons.send")}
            </MotionButton>
          </VStack>
        </form>
      </MotionBox>
    </FullScreenSection>
  );
};

export default ContactMeSection;
