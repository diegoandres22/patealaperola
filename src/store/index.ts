
import { configureStore } from "@reduxjs/toolkit";
import rateBcvSlice from "./slices/rateBcvSlice";
import raffleSlice from "./slices/rafflesSlice";

export const store = configureStore({
  reducer: {
    RateBcv : rateBcvSlice,
    Raffles: raffleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


