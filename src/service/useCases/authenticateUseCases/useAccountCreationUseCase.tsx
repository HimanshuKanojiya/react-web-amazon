import { User } from "firebase/auth";
import { useFirebaseProvider } from "service/provider/firebase/useFirebaseProvider";

export const useAccountCreationUseCase = async ({
  userName,
  userEmail,
  userMobileNumber,
  userPassword,
  firebaseAuth,
}: IUseAccountCreationUseCase): Promise<User> => {
  const firebaseProvider = useFirebaseProvider();
  const user = await firebaseProvider.performAccountCreation({
    userName,
    userEmail,
    userMobileNumber,
    userPassword,
    firebaseAuth,
  });

  return user.user;
};
