import { configureStore } from "@reduxjs/toolkit";
import Authenticate from "./slices/authenticate/Authenticate";

export const amazonStore = configureStore({
  reducer: {
    authenticate: Authenticate,
  },
});

export type RootState = ReturnType<typeof amazonStore.getState>;
export type AppDispatch = typeof amazonStore.dispatch;
