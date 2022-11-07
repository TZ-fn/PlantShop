import { useState, useEffect, useRef, useCallback } from 'react';

export const useFetch = (APIurl: string, requestOptions?: RequestInit) => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const cancelRequest = useRef<boolean>(false);

  cancelRequest.current = false;

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(APIurl, requestOptions);
      const data = await res.json();

      if (res.status === 404) {
        throw new Error(data?.message);
        setIsLoading(false);
      }

      if (cancelRequest.current) {
        return;
      }

      setResponse(data);
      setIsLoading(false);
    } catch (error) {
      if (cancelRequest.current) {
        return;
      }
      if (error instanceof Error) {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    }
  }, [APIurl, requestOptions]);

  const refresh = () => fetchData();

  useEffect(() => {
    if (!requestOptions || requestOptions.method === 'GET') {
      fetchData();
    }

    return () => {
      cancelRequest.current = true;
    };
  }, [APIurl]);

  return [response, isLoading, error, refresh] as const;
};
