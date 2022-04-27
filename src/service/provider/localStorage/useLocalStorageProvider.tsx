import { useBrowserStorage } from "service/base/browserStorage/useBrowserStorage";

export const useLocalStorageProvider = (): IUseLocalStorageProvider => {
  const localStorage = useBrowserStorage();

  const getDataFromLocalStorage = (key: string) => {
    localStorage.getLocalStorageItem(key);
  };

  const setDataToLocalStorage = (key: string, item: any) => {
    localStorage.setLocalStorageItem(key, item);
  };

  return {
    getDataFromLocalStorage,
    setDataToLocalStorage,
  };
};
