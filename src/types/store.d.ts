interface IAuthenticateState {
  loading: boolean;
  error: null | any;
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
  error: null;
  data: string | null;
  userName: string;
  userCountryCode: string;
  userPhone: string;
  userEmail?: string;
  userPassword: string;
  inputUIValidation: {
    isFormOkayToSubmit: boolean;
    isUserNameValid: boolean;
    isUserPhoneValid: boolean;
    isUserEmailValid: boolean;
    isUserPasswordValid: boolean;
  };
}
