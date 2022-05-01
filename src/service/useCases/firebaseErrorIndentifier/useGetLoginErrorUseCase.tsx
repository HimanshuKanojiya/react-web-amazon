export const useGetLoginErrorUseCase = () => {
  const getErrorName = (firebaseErrorName: string) => {
    if (firebaseErrorName.includes("wrong-password")) {
      return {
        errorType: "FIREBASE_WRONG_PASSWORD",
        errorMessage: "Your password is incorrect",
      };
    }
    if (firebaseErrorName.includes("user-not-found")) {
      return {
        errorType: "FIREBASE_USER_NOT_FOUND",
        errorMessage: "We cannot find an account with that email address",
      };
    }

    if (firebaseErrorName.includes("too-many-requests")) {
      return {
        errorType: "FIREBASE_MANY_FAILED_LOGIN_ATTEMPTS",
        errorMessage: "Too many failed login attempts, please try again later",
      };
    }
    //In case no name found
    return {
      errorType: firebaseErrorName,
      errorMessage: "ERROR NOT CONFIGURED!",
    };
  };

  return {
    getErrorName,
  };
};
