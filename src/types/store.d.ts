interface IAuthenticateState {
  loading: boolean;
  error: null;
  data: string | null;
  userEmail: string;
  userPassword: string;
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
  userPhone: string;
  userEmail?: string;
  userPassword: string;
}
