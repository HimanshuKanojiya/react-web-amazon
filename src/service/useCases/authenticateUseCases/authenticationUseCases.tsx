import { Auth } from "firebase/auth";
import { User } from "firebase/auth";
import { useFirebaseProvider } from "service/provider/firebase/useFirebaseProvider";

export const useFirebaseAuthGetUseCase = (): Auth => {
  const firebaseProvider = useFirebaseProvider();
  const auth = firebaseProvider.getFirebaseAuthApp();
  return auth;
};

export const useLoginPerformUseCase = async ({
  userEmail,
  userPassword,
  firebaseAuth,
}: IUsePerformLoginUseCase): Promise<User> => {
  const firebaseProvider = useFirebaseProvider();
  const user = await firebaseProvider.performSignIn({
    userEmail,
    userPassword,
    firebaseAuth,
  });
  return user.user;
};

export const useSignOutPerformUseCase = async ({
  firebaseAuth,
}: IUsePerformSignOutUseCase): Promise<void> => {
  const firebaseProvider = useFirebaseProvider();
  return await firebaseProvider.performSignOut({ firebaseAuth });
};
