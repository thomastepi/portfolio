import { useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/api/portfolio/add`, data);
      setResponse({
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setResponse({
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
