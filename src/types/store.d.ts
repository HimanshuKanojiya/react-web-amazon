type firebaseAuthenticationError = {
  errorType: string;
  errorMessage: string;
};

interface IAuthenticateState {
  loading: boolean;
  error: null | firebaseAuthenticationError;
  currentUserdata: null | User;
  isUserSignedIn: boolean;
  userEmail: string;
  userPassword: string;
  isLoginInputValid: boolean;
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
