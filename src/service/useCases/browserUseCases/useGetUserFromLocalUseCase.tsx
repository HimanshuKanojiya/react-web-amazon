import { User } from "firebase/auth";
import { useLocalStorageProvider } from "service/provider/localStorage/useLocalStorageProvider";

export const useGetUserFromLocalUseCase = (key: string): null | User => {
  const { getDataFromLocalStorage } = useLocalStorageProvider();
  const userData = getDataFromLocalStorage(key);

  if (!userData) return null;

  return userData as User;
};
