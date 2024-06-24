/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import ApiService from "./ApiService";

const FetchData = (endpoint: string) => {
  const [data, setData] = useState<Array<{ [key: string]: any }> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ApiService.get(endpoint);
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default FetchData;
