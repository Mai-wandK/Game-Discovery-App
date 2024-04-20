import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
  id: number;
  name: string;
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // An array of objects with a platform property
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]) // Specify the type of the state as
    const [error, setError] = useState('')
    const [isLoading, setLoading]=useState(false);

    useEffect(() =>{
      const controller = new AbortController();

      setLoading(true);
      // Fetch the data from the API
      apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
        .then((response) => {
          setGames(response.data.results);
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
    return ({ games, error, isLoading});
}

export default useGames
