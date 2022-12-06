import { useEffect, useState } from 'react';

const useLocalStorage = <T,>(name: string, defaultValue: T) => {
  const [storage] = useState<T>(() => defaultValue);

  const setStorageItem = (item: T) => {
    const itemString = JSON.stringify(item);
    window.localStorage.setItem(name, itemString);
  };

  const getStorageItem = (): T =>
    JSON.parse(
      window.localStorage.getItem(name) || JSON.stringify(defaultValue)
    );

  useEffect(() => {
    const item = JSON.parse(
      localStorage.getItem(name) || JSON.stringify(defaultValue)
    );
    setStorageItem(item);
  }, []);

  return { storage, setStorageItem, getStorageItem };
};

export default useLocalStorage;
