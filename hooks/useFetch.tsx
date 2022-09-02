import { useState, useEffect } from 'react';
import { PlantsData } from 'types/types';

export const useFetch = (APIurl: string, requestOptions?: Partial<RequestInit>): PlantsData => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIurl, requestOptions);
        const data = await response.json();

        if (response.status === 404) {
          throw new Error(data?.message);
        }
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [APIurl]);

  return data;
};
