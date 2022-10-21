import { ApiError } from 'next/dist/server/api-utils';
import { useState, useEffect, useRef } from 'react';
import { PlantsData } from 'types/types';

export const useFetch = (
  APIurl: string,
  requestOptions?: RequestInit,
): [ApiData | null, boolean, ApiError | null] => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const cancelRequest = useRef<boolean>(false);

  cancelRequest.current = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(APIurl, requestOptions);
        const data = await res.json();

        if (res.status === 404) {
          throw new Error(data?.message);
        }

        if (cancelRequest.current) {
          return;
        }

        setResponse(data);
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }

        if (error instanceof Error) {
          console.log(error);
        }
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [APIurl]);

  return [response, isLoading, error];
};
