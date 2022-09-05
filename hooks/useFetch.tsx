import { useState, useEffect, useRef } from 'react';
import { PlantsData } from 'types/types';

export const useFetch = (APIurl: string, requestOptions?: RequestInit): PlantsData => {
  const cancelRequest = useRef<boolean>(false);
  const [data, setData] = useState([]);
  cancelRequest.current = false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIurl, requestOptions);
        const data = await response.json();

        if (response.status === 404) {
          throw new Error(data?.message);
        }

        if (cancelRequest.current) {
          return;
        }
        setData(data);
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

  return data;
};
