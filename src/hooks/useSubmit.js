import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const baseUrl = process.env.REACT_APP_BASE_URL;

const useSubmit = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);

    try {
      await axios.post(`${baseUrl}/api/portfolio/add`, data);

      setResponse({
        type: "success",
        message: t("contactMe.alerts.success"),
      });
    } catch (error) {
      console.error(error);

      let errorMessage = t("contactMe.alerts.error");

      if (error.response) {
        if (error.response.status === 400 && error.response.data) {
          let errorObj = error.response.data;
          errorMessage = Object.entries(errorObj)
            .map(
              ([key, value]) =>
                `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
            )
            .join("\n");
        } else if (error.response.status === 500) {
          errorMessage = t("contactMe.validation.serverError");
        }
      } else if (error.request) {
        errorMessage = t("contactMe.validation.networkError");
      }

      setResponse({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
