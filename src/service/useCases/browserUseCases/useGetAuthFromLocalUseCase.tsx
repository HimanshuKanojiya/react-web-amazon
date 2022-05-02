import { Auth } from "firebase/auth";
import { useLocalStorageProvider } from "service/provider/localStorage/useLocalStorageProvider";

export const useGetAuthFromLocalUseCase = (key: string): null | Auth => {
  const { getDataFromLocalStorage } = useLocalStorageProvider();
  const authData = getDataFromLocalStorage(key);

  if (!authData) return null;

  return authData as Auth;
};
