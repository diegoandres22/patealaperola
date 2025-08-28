import { createSlice } from "@reduxjs/toolkit";
import { createNewPurchase } from "../services/newPurchaseService";

interface PurchaseState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: PurchaseState = {
  loading: false,
  success: false,
  error: null,
};

const newPurchaseSlice = createSlice({
  name: "newPurchase",
  initialState,
  reducers: {
    resetPurchaseState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewPurchase.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createNewPurchase.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(createNewPurchase.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error =
          (action.payload as string) || "Error al crear la compra";
      });
  },
});

export const { resetPurchaseState } = newPurchaseSlice.actions;
export default newPurchaseSlice.reducer;
