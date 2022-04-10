import { configureStore } from "@reduxjs/toolkit";

export const amazonStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof amazonStore.getState>;
export type AppDispatch = typeof amazonStore.dispatch;
