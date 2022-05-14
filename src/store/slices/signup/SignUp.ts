import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { useAccountCreationUseCase } from "service/useCases/authenticateUseCases/useAccountCreationUseCase";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";
import { useGetLoginErrorUseCase } from "service/useCases/firebaseErrorIndentifier/useGetLoginErrorUseCase";

export const performAccountCreation = createAsyncThunk<
  { currentUserData: User },
  IUseAccountCreationUseCase,
  {
    rejectValue: {
      errorType: string;
      errorMessage: string;
    };
  }
>(
  "signUp/createAccount",
  async (
    { userName, userEmail, userMobileNumber, userPassword },
    { rejectWithValue }
  ) => {
    try {
      const auth = await useFirebaseAuthGetUseCase();
      const user = await useAccountCreationUseCase({
        userName,
        userEmail,
        userMobileNumber,
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

export const SignUp = createSlice({
  name: "signUp",
  initialState: {
    loading: false,
    error: null,
    currentUserData: null,
    userName: "",
    userPassword: "",
    userEmail: "",
    userCountryCode: "",
    userMobileNumber: "",
    inputUIValidation: {
      isFormOkayToSubmit: false,
      isUserNameValid: false,
      isUserEmailValid: false,
      isUserMobileValid: false,
      isUserPasswordValid: false,
    },
  } as ISignUp,
  reducers: {
    addBasicInfo: (
      state: ISignUp,
      action: { payload: { inputName: any; inputValue: any } }
    ) => {
      const { inputName, inputValue } = action.payload;
      switch (inputName) {
        case "addUserFullName":
          state.userName = inputValue;
          break;

        case "addUserPassword":
          state.userPassword = inputValue;
          break;

        case "addUserEmail":
          state.userEmail = inputValue;
          break;

        case "addUserMobileNumber":
          state.userMobileNumber = inputValue;
          break;

        case "addUserCountryCode":
          state.userCountryCode = inputValue;
          break;
      }
    },
    validateUIInputs: (
      state: ISignUp,
      action: { payload: { inputName: any; inputValue: any } }
    ) => {
      const { inputName, inputValue } = action.payload;
      switch (inputName) {
        case "isUserNameValid":
          state.inputUIValidation.isUserNameValid = inputValue;
          break;
        case "isUserEmailValid":
          state.inputUIValidation.isUserEmailValid = inputValue;
          break;
        case "isUserMobileValid":
          state.inputUIValidation.isUserMobileValid = inputValue;
          break;
        case "isUserPasswordValid":
          state.inputUIValidation.isUserPasswordValid = inputValue;
      }
    },
    verifyFormInputs: (
      state: ISignUp,
      action: {
        payload: {
          userName: any;
          userEmail: any;
          userMobileNumber: any;
          userCountryCode: any;
          userPassword: any;
        };
      }
    ) => {
      const emailExpression =
        /^[a-zA-Z0-9]+[a-zA-Z0-9-+_.]+@[a-zA-Z0-9+-]+\.([a-zA-Z0-9.])+/g;

      const passwordExpression =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/;

      state.inputUIValidation.isFormOkayToSubmit = false;

      if (!action.payload.userName) return;

      if (action.payload.userName.match("[0-9]+") !== null) return;

      if (!action.payload.userEmail) return;

      if (action.payload.userEmail.length <= 6) return;

      if (action.payload.userEmail.match(emailExpression) === null) return;

      if (action.payload.userEmail.match(emailExpression).length !== 1) return;

      if (action.payload.userEmail.split("@").length > 2) return;

      if (!action.payload.userMobileNumber) return;

      if (action.payload.userMobileNumber.length !== 10) return;

      if (!action.payload.userCountryCode) return;

      if (!action.payload.userPassword) return;

      if (action.payload.userPassword.match(passwordExpression) === null)
        return;

      state.inputUIValidation.isFormOkayToSubmit = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(performAccountCreation.rejected, (state, action) => {
      state.loading = false;
      state.currentUserData = null;
      state.error = action.payload!;
    });

    builder.addCase(performAccountCreation.pending, (state, action) => {
      state.loading = true;
      state.currentUserData = null;
      state.error = null;
    });

    builder.addCase(performAccountCreation.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUserData = action.payload.currentUserData;
      state.error = null;
    });
  },
});

export const { addBasicInfo, validateUIInputs, verifyFormInputs } =
  SignUp.actions;

export default SignUp.reducer;
