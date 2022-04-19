import { createSlice } from "@reduxjs/toolkit";

const Authenticate = createSlice({
  name: "authenticate",
  initialState: {
    loading: false,
    error: null,
    data: null,
    isUserSignedIn: false,
    userEmail: "",
    userPassword: "",
    inputUIValidation: {
      isUserEmailValid: false,
      isPasswordValid: false,
    },
  } as IAuthenticateState,
  reducers: {
    addUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    login: (state) => {
      state.isUserSignedIn = true;
    },
    logout: (state) => {
      state.isUserSignedIn = false;
    },
  },
});

export const { login, logout, addUserEmail, addUserPassword } =
  Authenticate.actions;

export default Authenticate.reducer;
