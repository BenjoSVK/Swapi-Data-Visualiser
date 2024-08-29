import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://swapi.dev/api";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const fetchFromEndpoint = async <T>(
  endpoint: string,
  page: number
): Promise<FetchResponse<T>> => {
  try {
    const response: AxiosResponse<FetchResponse<T>> = await axios.get(
      `${API_BASE_URL}/${endpoint}`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from endpoint:", error);
    throw error;
  }
};
