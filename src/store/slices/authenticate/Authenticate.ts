import { createSlice } from "@reduxjs/toolkit";

const Authenticate = createSlice({
  name: "authenticate",
  initialState: {
    isUserSignedIn: true,
  } as IAuthenticateState,
  reducers: {
    login: (state) => {
      state.isUserSignedIn = true;
    },
    logout: (state) => {
      state.isUserSignedIn = false;
    },
  },
});

export const { login, logout } = Authenticate.actions;

export default Authenticate.reducer;
