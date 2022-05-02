import { User, Auth } from "firebase/auth";
import { useLocalStorageProvider } from "service/provider/localStorage/useLocalStorageProvider";

export const useSetAuthUserToLocalUseCase = (
  key: "auth" | "user",
  item: Auth | User | any
) => {
  const { setDataToLocalStorage } = useLocalStorageProvider();
  setDataToLocalStorage(key, item);
};
