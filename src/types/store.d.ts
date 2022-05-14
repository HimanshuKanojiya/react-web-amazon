type firebaseAuthenticationError = {
  errorType: string;
  errorMessage: string;
};

interface IAuthenticateState {
  loading: boolean;
  error: null | firebaseAuthenticationError;
  currentUserData: null | User;
  isUserSignedIn: boolean;
  userEmail: string;
  userPassword: string;
  isLoginInputValid: boolean;
  currentLanguage: "EN" | "HI" | "TA" | "TE" | "KN" | "BN" | "ML" | "MR";
  inputUIValidation: {
    isUserEmailValid: boolean;
    isPasswordValid: boolean;
  };
}

interface ISignUp {
  loading: boolean;
  error: null | firebaseAuthenticationError;
  currentUserData: null | User;
  userName: string;
  userCountryCode: string;
  userMobileNumber: string;
  userEmail: string;
  userPassword: string;
  inputUIValidation: {
    isFormOkayToSubmit: boolean;
    isUserNameValid: boolean;
    isUserMobileValid: boolean;
    isUserEmailValid: boolean;
    isUserPasswordValid: boolean;
  };
}
