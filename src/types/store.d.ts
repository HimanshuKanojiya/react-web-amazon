interface IAuthenticateState {
  loading: boolean;
  error: null | any;
  data: null | User;
  userEmail: string;
  userPassword: string;
  userAuth: null | Auth;
  isUserSignedIn: boolean;
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
