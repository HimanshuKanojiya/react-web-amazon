import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useProdEnvironment } from "environment/useProdEnvironment";

export const useFirebaseCore = () => {
  const {
    getFireBaseAPIKey,
    getFireBaseAuthDomain,
    getFireBaseStorageBucket,
    getFireBaseAppId,
    getFireBaseMessaginSenderId,
    getFireBaseProjectId,
  } = useProdEnvironment();

  const getFirebaseConfig = (): IGetFireBaseConfig => {
    return {
      apiKey: getFireBaseAPIKey(),
      authDomain: getFireBaseAuthDomain(),
      projectId: getFireBaseProjectId(),
      storageBucket: getFireBaseStorageBucket(),
      messagingSenderId: getFireBaseMessaginSenderId(),
      appId: getFireBaseAppId(),
    };
  };

  const initializeFirebaseApp = (
    firebaseConfig: IGetFireBaseConfig
  ): IInitializeFirebaseApp => {
    return initializeApp(firebaseConfig);
  };

  const getFirebaseAuthApp = (initializeApp: IInitializeFirebaseApp): Auth => {
    return getAuth(initializeApp);
  };

  const performSignInUsingEmailPassword = async ({
    userEmail,
    userPassword,
    firebaseAuth,
  }: IPerformSigUpUsingEmailPassword) => {
    await setPersistence(firebaseAuth, browserSessionPersistence);
    return signInWithEmailAndPassword(firebaseAuth, userEmail, userPassword);
  };

  const createUserAccount = async ({
    userName,
    userMobileNumber,
    userEmail,
    userPassword,
  }: ICreateUserAccount) => {};

  const performSignOut = async ({ FirebaseAuth }: IPerformSignOut) => {
    return await signOut(FirebaseAuth);
  };

  return {
    initializeFirebaseApp,
    getFirebaseConfig,
    getFirebaseAuthApp,
    performSignInUsingEmailPassword,
    performSignOut,
    createUserAccount,
  };
};
