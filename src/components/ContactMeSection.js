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
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [submittedFirstName, setSubmittedFirstName] = React.useState("");

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
        var message = `Thanks for your submission ${submittedFirstName}, we will get back to you shortly!`;
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
      backgroundColor="#512DA8"
      css={{
        "@media (max-width: 768px)": {
          width: "90%",
        },
        width: "50%",
      }}
      py={16}
      spacing={8}
    >
      <VStack bg="#492E87" p="30px" w="100%">
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
                  borderBottom={formik.errors.name ? "none!important" : "white"}
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
                  borderBottom={
                    formik.errors.email ? "none!important" : "white"
                  }
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  color="white"
                >
                  <option style={{ color: "black" }} value="jobOpportunity">
                    -- Select --
                  </option>
                  <option style={{ color: "black" }} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option style={{ color: "black" }} value="feedback">
                    Feedback
                  </option>
                  <option style={{ color: "black" }} value="other">
                    Other
                  </option>
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
                  borderBottom={
                    formik.errors.comment ? "none!important" : "white"
                  }
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
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
