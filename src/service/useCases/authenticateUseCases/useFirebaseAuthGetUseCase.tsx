import { Auth } from "firebase/auth";
import { useFirebaseProvider } from "service/provider/firebase/useFirebaseProvider";

export const useFirebaseAuthGetUseCase = (): Auth => {
  const firebaseProvider = useFirebaseProvider();
  const auth = firebaseProvider.getFirebaseAuthApp();
  return auth;
};
