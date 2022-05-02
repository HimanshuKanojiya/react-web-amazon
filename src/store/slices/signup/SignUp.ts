import { createSlice } from "@reduxjs/toolkit";

export const SignUp = createSlice({
  name: "signup",
  initialState: {
    loading: false,
    error: null,
    data: null,
    userName: "",
    userPassword: "",
    userEmail: "",
    userCountryCode: "",
    userPhone: "",
    inputUIValidation: {
      isFormOkayToSubmit: false,
      isUserNameValid: false,
      isUserEmailValid: false,
      isUserPhoneValid: false,
      isUserPasswordValid: false,
    },
  } as ISignUp,
  reducers: {
    addBasicInfo: (state, action) => {
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

        case "addUserPhone":
          state.userPhone = inputValue;
          break;

        case "addUserCountryCode":
          state.userCountryCode = inputValue;
          break;
      }
    },
    validateUIInputs: (state, action) => {
      const { inputName, inputValue } = action.payload;
      switch (inputName) {
        case "isUserNameValid":
          state.inputUIValidation.isUserNameValid = inputValue;
          break;
        case "isUserEmailValid":
          state.inputUIValidation.isUserEmailValid = inputValue;
          break;
        case "isUserPhoneValid":
          state.inputUIValidation.isUserPhoneValid = inputValue;
          break;
        case "isUserPasswordValid":
          state.inputUIValidation.isUserPasswordValid = inputValue;
      }
    },
    verifyFormInputs: (state, action) => {
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

      if (!action.payload.userPhone) return;

      if (action.payload.userPhone.length !== 10) return;

      if (!action.payload.userCountryCode) return;

      if (!action.payload.userPassword) return;

      if (action.payload.userPassword.match(passwordExpression) === null)
        return;

      state.inputUIValidation.isFormOkayToSubmit = true;
    },
  },
});

export const { addBasicInfo, validateUIInputs, verifyFormInputs } =
  SignUp.actions;

export default SignUp.reducer;
