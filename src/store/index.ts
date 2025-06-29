
import { configureStore } from "@reduxjs/toolkit";
import rateBcvSlice from "./slices/rateBcvSlice";

export const store = configureStore({
  reducer: {
    RateBcv : rateBcvSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

