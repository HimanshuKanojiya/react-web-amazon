import { configureStore } from "@reduxjs/toolkit";
import Authenticate from "./slices/authenticate/Authenticate";
import SignUp from "./slices/signup/SignUp";

export const amazonStore = configureStore({
  reducer: {
    authenticate: Authenticate,
    signUp: SignUp,
  },
});

export type RootState = ReturnType<typeof amazonStore.getState>;
export type AppDispatch = typeof amazonStore.dispatch;
