import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


// The useData Hook
// This custom hook is designed to fetch data from an API and handle loading and error states. It uses generics to be reusable for different data types.

interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useData =<T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]) // Specify the type of the state
  const [error, setError] = useState('')
  const [isLoading, setLoading]=useState(false);

  useEffect(() =>{
    const controller = new AbortController();

    setLoading(true);
    // Fetch the data from the API
    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      }) // Access the response data when setting the state
      // Catch any errors and set the error state
      .catch((error) => {
        if (error instanceof CanceledError ) return;
        setError(error.message);
        setLoading(false)
      })
    //  if (error instanceof CanceledError): This line checks if the error is specifically a CanceledError.
    // If it is, the function returns early (i.e., no further code execution), effectively ignoring the error.
    // If it’s a different type of error (not related to cancellation), the setError function is called with the error message.

      // Clean up function
      return () => controller.abort();
  }, []);
  return ({ data, error, isLoading});
}

export default useData;
