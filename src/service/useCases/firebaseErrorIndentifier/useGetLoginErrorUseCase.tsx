export const useGetLoginErrorUseCase = () => {
  const getErrorName = (firebaseErrorName: string) => {
    if (firebaseErrorName.includes("wrong-password")) {
      return "FIREBASE_WRONG_PASSWORD";
    }
    if (firebaseErrorName.includes("user-not-found")) {
      return "FIREBASE_USER_NOT_FOUND";
    }

    //In case no name found
    return firebaseErrorName;
  };

  return {
    getErrorName,
  };
};
