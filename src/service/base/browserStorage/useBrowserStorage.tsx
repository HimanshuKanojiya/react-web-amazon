export const useBrowserStorage = (): IUseBrowserStorage => {
  const getLocalStorageItem = (key: string) => {
    return localStorage.getItem(key) ?? "";
  };

  const setLocalStorageItem = (key: string, item: any) => {
    localStorage.setItem(key, item);
  };

  const getSessionStorageItem = (key: string) => {
    return localStorage.getItem(key) ?? "";
  };

  return { getLocalStorageItem, setLocalStorageItem };
};
