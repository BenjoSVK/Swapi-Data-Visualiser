import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  results: T;
}

interface FetchResult<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

export const useFetchDisplay = <T,>(endpoint: string, page: number): FetchResult<T[]> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<ApiResponse<T[]>> = await axios.get(
          `https://swapi.dev/api/${endpoint}`,
          {
            params: { page },
            signal: controller.signal,
          }
        );
        setData(response.data.results);
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setError(error as Error);
          console.log("Error fetching data: ", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();

    return () => {
      controller.abort();
    };
  }, [endpoint, page]);

  return { data, loading, error };
};

export default useFetchDisplay;
