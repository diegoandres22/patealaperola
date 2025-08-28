import { createAsyncThunk } from "@reduxjs/toolkit";

interface PurchasePayload {
  buyer_email: string;
  raffle_id: string;
  ticket_count: number;
  payment_method: string;
  payment_reference: string;
  full_name: string;
  phone_number: string;
  holder_cta_bank: string;
  file: File | null;
}

const API_URL = "https://plp-api-fastapi.onrender.com/purchase/";

export const createNewPurchase = createAsyncThunk(
  "purchase/create",
  async (payload: PurchasePayload, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("buyer_email", payload.buyer_email);
      formData.append("raffle_id", payload.raffle_id);
      formData.append("ticket_count", String(payload.ticket_count));
      formData.append("payment_method", payload.payment_method);
      formData.append("payment_reference", payload.payment_reference);
      formData.append("full_name", payload.full_name);
      formData.append("phone_number", payload.phone_number);
      formData.append("holder_cta_bank", payload.holder_cta_bank);

      if (payload.file) {
        formData.append("file", payload.file);
      }

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      return await response.json();
    } catch (error: string | unknown) {
      return rejectWithValue((error as Error).message || "Error desconocido");
    }
  }
);
