import { useEffect, useState } from 'react';

function getStorageValueFn(key: string): string {
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    return savedValue;
  }

  return '';
}

export default function useLocalStorage(
  key: string
): [
  value: string,
  functions: { setItemFn: () => void; removeItemFn: () => void }
] {
  const [value, setValue] = useState<string>(() => getStorageValueFn(key));

  function setItemFn(): void {
    localStorage.setItem(key, value);
    setValue(String(Date.now()));
  }

  function removeItemFn(): void {
    localStorage.removeItem(key);
    setValue('');
  }

  useEffect(() => setItemFn(), [key]);

  return [value, { setItemFn, removeItemFn }];
}
