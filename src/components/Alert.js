import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const { t } = useTranslation();
  const isSuccess = type === "success";

  const successBgColor = useColorModeValue("green.100", "green.700");
  const errorBgColor = useColorModeValue("red.100", "red.700");

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? successBgColor : errorBgColor}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? t("alert.successHeader") : t("alert.errorHeader")}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
