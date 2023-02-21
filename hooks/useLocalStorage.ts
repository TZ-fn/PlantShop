import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal == null) {
      if (typeof initialValue === 'function') {
        return initialValue as () => T;
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonVal);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
};
