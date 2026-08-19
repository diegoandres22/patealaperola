
import { configureStore } from "@reduxjs/toolkit";
import raffleSlice from "./slices/rafflesSlice";
import banksAcounts from "./slices/banksAcountsSlice";
import raffleDetail from "./slices/raffleDetailSlice";
import newPurchase from "./slices/newPurchaseSlide";
import ticketsValidateByEmail from "./slices/ticketsValidateByEmailSlice";

// rateBcvSlice se retiró: la app trabaja solo en $, sin tasa de cambio
// (ver purchaseForm.tsx / purchaseDataTable.tsx).
export const store = configureStore({
  reducer: {
    Raffles: raffleSlice,
    BanksAcounts: banksAcounts,
    RaffleDetail: raffleDetail,
    purchase: newPurchase,
    ticketsValidateByEmail: ticketsValidateByEmail,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


