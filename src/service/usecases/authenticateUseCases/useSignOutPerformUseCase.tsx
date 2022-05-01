import { useFirebaseProvider } from "service/provider/firebase/useFirebaseProvider";

export const useSignOutPerformUseCase = async ({
  firebaseAuth,
}: IUsePerformSignOutUseCase): Promise<void> => {
  const firebaseProvider = useFirebaseProvider();
  return await firebaseProvider.performSignOut({ firebaseAuth });
};
