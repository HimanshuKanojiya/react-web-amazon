import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { useLoginPerformUseCase } from "service/useCases/authenticateUseCases/useLoginPerformUseCase";
import { useSignOutPerformUseCase } from "service/useCases/authenticateUseCases/useSignOutPerformUseCase";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";
import { useGetLoginErrorUseCase } from "service/useCases/firebaseErrorIndentifier/useGetLoginErrorUseCase";

export const performSignInToFirebase = createAsyncThunk<
  { currentUserData: User },
  IperformSignIn,
  {
    rejectValue: { errorType: string; errorMessage: string };
  }
>(
  "authenticate/signIn",
  async ({ userEmail, userPassword }, { rejectWithValue }) => {
    try {
      const auth = await useFirebaseAuthGetUseCase();
      const user = await useLoginPerformUseCase({
        userEmail,
        userPassword,
        firebaseAuth: auth,
      });

      return { currentUserData: user };
    } catch (error: any) {
      const { getErrorName } = useGetLoginErrorUseCase();
      const getError = getErrorName(error.message);
      return rejectWithValue(getError);
    }
  }
);

export const performSignOutFromFirebase = createAsyncThunk<
  void,
  null,
  {
    rejectValue: { errorType: string; errorMessage: string };
  }
>("authenticate/signOut", async (_, { rejectWithValue }) => {
  try {
    const auth = await useFirebaseAuthGetUseCase();
    const user = await useSignOutPerformUseCase({ firebaseAuth: auth });
    return user;
  } catch (error: any) {
    rejectWithValue(error.message);
  }
});

const Authenticate = createSlice({
  name: "authenticate",
  initialState: {
    loading: false,
    error: null,
    currentUserdata: null,
    isUserSignedIn: false,
    userEmail: "",
    currentLanguage: "EN",
    userPassword: "",
    isLoginInputValid: false,
    inputUIValidation: {
      isUserEmailValid: false,
      isPasswordValid: false,
    },
  } as IAuthenticateState,
  reducers: {
    addLoginInfo: (
      state: IAuthenticateState,
      action: { payload: { inputName: any; inputValue: any } }
    ) => {
      const { inputName, inputValue } = action.payload;

      switch (inputName) {
        case "addUserEmail":
          state.userEmail = inputValue;
          break;
        case "addUserPassword":
          state.userPassword = inputValue;
          break;
      }
    },
    doLogin: (state: IAuthenticateState) => {
      state.isUserSignedIn = true;
    },
    doLogout: (state: IAuthenticateState) => {
      state.isUserSignedIn = false;
    },
    verifyLoginInputs: (
      state: IAuthenticateState,
      action: {
        payload: { userEmail: any; userPassword: any };
      }
    ) => {
      const emailExpression =
        /^[a-zA-Z0-9]+[a-zA-Z0-9-+_.]+@[a-zA-Z0-9+-]+\.([a-zA-Z0-9.])+/g;

      state.isLoginInputValid = false;

      if (!action.payload.userEmail) return;

      if (action.payload.userEmail.length <= 6) return;

      if (action.payload.userEmail.match(emailExpression) === null) return;

      if (action.payload.userEmail.match(emailExpression).length !== 1) return;

      if (action.payload.userEmail.split("@").length > 2) return;

      if (!action.payload.userPassword) return;

      if (action.payload.userPassword.length < 6) return;

      state.isLoginInputValid = true;
    },
    validateUserInputs: (
      state: IAuthenticateState,
      action: { payload: { inputName: any; inputValue: any } }
    ) => {
      const { inputName, inputValue } = action.payload;

      switch (inputName) {
        case "isLoginEmailValid":
          state.inputUIValidation.isUserEmailValid = inputValue;
          break;

        case "isLoginPasswordValid":
          state.inputUIValidation.isPasswordValid = inputValue;
          break;
      }
    },
    switchLanguage: (
      state: IAuthenticateState,
      action: { payload: "EN" | "HI" | "TA" | "TE" | "KN" | "BN" | "ML" | "MR" }
    ) => {
      state.currentLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(performSignInToFirebase.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.currentUserdata = null;
      state.isUserSignedIn = false;
    });

    builder.addCase(performSignInToFirebase.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
      state.currentUserdata = null;
      state.isUserSignedIn = false;
    });

    builder.addCase(performSignInToFirebase.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUserdata = action.payload.currentUserData;
      state.isUserSignedIn = action.payload ? true : false;
    });

    builder.addCase(performSignOutFromFirebase.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(performSignOutFromFirebase.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    });

    builder.addCase(performSignOutFromFirebase.fulfilled, (state) => {
      state.loading = false;
      state.currentUserdata = null;
      state.error = null;
      state.isUserSignedIn = false;
    });
  },
});

export const {
  doLogin,
  doLogout,
  addLoginInfo,
  validateUserInputs,
  verifyLoginInputs,
  switchLanguage,
} = Authenticate.actions;

export default Authenticate.reducer;
