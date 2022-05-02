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
  },
});

export const { addBasicInfo, validateUIInputs } = SignUp.actions;

export default SignUp.reducer;
