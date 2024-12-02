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
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [submittedFirstName, setSubmittedFirstName] = React.useState("");

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
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success" && submittedFirstName) {
        var message = `Thanks for your submission ${submittedFirstName}, I will get back to you shortly!`;
        var type = "success";
        onOpen(type, message);
        formik.resetForm();
      } else if (response.type === "error") {
        var message = "Something went wrong, please try again later!";
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
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box paddingTop={7} w="full">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={5}>
              <FormControl
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
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
                <FormLabel htmlFor="email">Email Address</FormLabel>
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
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  bg={inputBg}
                  borderColor={borderColor}
                  _hover={{ borderColor: focusBorderColor }}
                  _focus={{ borderColor: focusBorderColor }}
                >
                  <option value="jobOpportunity">-- Select --</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
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
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
