// store/slices/ticketsValidateByEmailSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTicketsByEmail } from "../services/purchaseService";
import { TicketByRaffle, TicketsValidateByEmailState } from "@/types";


const initialState: TicketsValidateByEmailState = {
  loading: false,
  error: null,
  data: [],
};

const ticketsValidateByEmailSlice = createSlice({
  name: "ticketsValidateByEmail",
  initialState,
  reducers: {
    clearTicketsState(state) {
      state.loading = false;
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsByEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(
        fetchTicketsByEmail.fulfilled,
        (state, action: PayloadAction<TicketByRaffle[]>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchTicketsByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Error desconocido al cargar tickets";
        state.data = [];
      });
  },
});

export const { clearTicketsState } = ticketsValidateByEmailSlice.actions;
export default ticketsValidateByEmailSlice.reducer;
