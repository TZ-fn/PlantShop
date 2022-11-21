import { useState, useEffect, useRef, useCallback } from 'react';
import { PlantsData, UnsplashPhotoResults } from 'types/types';

type APIData = UnsplashPhotoResults | PlantsData;

export const useFetch = (APIurl: string, requestOptions?: RequestInit) => {
  const [response, setResponse] = useState<APIData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const cancelRequest = useRef<boolean>(false);

  cancelRequest.current = false;

  const fetchData = useCallback(async () => {
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch(APIurl, requestOptions);
      const data = await res.json();
      setResponse(data);

      if (res.status === 404) {
        setIsLoading(false);
        throw new Error(data?.message);
      }

      if (cancelRequest.current) {
        return;
      }
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
  }, [APIurl, requestOptions?.body]);

  const refresh = () => fetchData();

  useEffect(() => {
    if (!requestOptions || requestOptions.method === 'GET') {
      fetchData();
    }

    return () => {
      cancelRequest.current = true;
    };
  }, [APIurl]);

  return [response, isLoading, error, refresh];
};
