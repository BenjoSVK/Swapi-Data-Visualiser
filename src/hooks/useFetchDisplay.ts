import { useEffect, useState } from "react";
import { fetchFromEndpoint } from "../services/apiService";

interface FetchResult<T> {
  data: (T | null)[];
  count: number,
  loading: boolean;
  error: Error | null;
}

const useFetchDisplay = <T, >(endpoint: string, page: number): FetchResult<T> => {
  const [data, setData] = useState<(T | null)[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { count, results } = await fetchFromEndpoint<T>(endpoint, page);
        setData(results);
        setCount(count);
        setError(null);
        // console.log(results); 
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, page]);

  return { data, count, loading, error };
};

export default useFetchDisplay;
