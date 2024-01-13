import {useState} from "react";
import supabase from "../utils/supabase";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      const { data: contact, error } = await supabase
        .from("portfolio")
        .insert([{name: data.firstName, email: data.email, type: data.type, comment: data.comment}])
        .select();
      if (error) throw error;
      setResponse({
        type: 'success',
      });
    } catch (error) {
      setResponse({
        type: 'error',
      })

    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
