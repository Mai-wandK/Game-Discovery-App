import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]) // Specify the type of the state 
  const [error, setError] = useState('')
  const [isLoading, setLoading]=useState(false);

  useEffect(() =>{
    const controller = new AbortController();

    setLoading(true);
    // Fetch the data from the API
    apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
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
  return ({ genres, error, isLoading});
}

export default useGenres
