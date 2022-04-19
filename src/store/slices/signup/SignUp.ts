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
    addFullName: (state, action) => {
      state.userName = action.payload;
    },
    addUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    addUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addUserPhone: (state, action) => {
      state.userPhone = action.payload;
    },
    addUserCountryCode: (state, action) => {
      state.userCountryCode = action.payload;
    },
  },
});

export const {
  addFullName,
  addUserEmail,
  addUserPassword,
  addUserPhone,
  addUserCountryCode,
} = SignUp.actions;

export default SignUp.reducer;
