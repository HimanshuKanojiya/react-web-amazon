interface IAuthenticateState {
  userEmail: string;
  userPassword: string;
  isUserSignedIn: boolean;
  inputUIValidation: {
    isUserEmailValid: boolean;
    isPasswordValid: boolean;
  };
}
