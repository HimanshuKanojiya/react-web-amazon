import { configureStore } from "@reduxjs/toolkit";
import Authenticate from "./slices/authenticate/Authenticate";
import SignUp from "./slices/signup/SignUp";

export const amazonStore = configureStore({
  reducer: {
    authenticate: Authenticate,
    signUp: SignUp,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          "authenticate.currentUserData",
          "authenticate.setCurrentUserData",
          "authenticate.currentUserdata.currentUserData",
          "signUp.currentUserData",
        ],
        ignoredActionPaths: ["payload.currentUserData", "payload"],
      },
    });
  },
});

export type RootState = ReturnType<typeof amazonStore.getState>;
export type AppDispatch = typeof amazonStore.dispatch;
