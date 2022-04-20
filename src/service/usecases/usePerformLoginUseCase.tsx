import { User } from "firebase/auth";
import { useFirebaseProvider } from "service/provider/firebase/useFirebaseProvider";

export const usePerformLoginUseCase = async ({
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
