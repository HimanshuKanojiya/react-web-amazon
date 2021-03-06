import { UserCredential } from "firebase/auth";
import { useFirebaseCore } from "service/base/firebase/useFirebaseCore";

export const useFirebaseProvider = () => {
  const fireBaseCore = useFirebaseCore();

  const getFirebaseAuthApp = () => {
    const firebaseAuth = fireBaseCore.initializeFirebaseApp(
      fireBaseCore.getFirebaseConfig()
    );
    return fireBaseCore.getFirebaseAuthApp(firebaseAuth);
  };

  const performSignIn = async ({
    userEmail,
    userPassword,
    firebaseAuth,
  }: IperformSignIn): Promise<UserCredential> => {
    return await fireBaseCore.performSignInUsingEmailPassword({
      userEmail,
      userPassword,
      firebaseAuth,
    });
  };

  const performSignOut = async ({
    firebaseAuth,
  }: IperformSignOut): Promise<void> => {
    return await fireBaseCore.performSignOut({ FirebaseAuth: firebaseAuth });
  };

  const performAccountCreation = async ({
    userName,
    userMobileNumber,
    userEmail,
    userPassword,
    firebaseAuth,
  }: IperformAccountCreation): Promise<UserCredential> => {
    return await fireBaseCore.createUserAccount({
      userName,
      userMobileNumber,
      userEmail,
      userPassword,
      firebaseAuth,
    });
  };

  return {
    getFirebaseAuthApp,
    performSignIn,
    performSignOut,
    performAccountCreation,
  };
};
