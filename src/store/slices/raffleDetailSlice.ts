// src/store/slices/raffleDetailSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Raffle, RaffleDetailState } from '@/types';
import { getRaffleById } from "../services/raffleService";



const initialState: RaffleDetailState = {
  raffleDetail: null,
  loading: false,
  error: null,
};


export const fetchRaffleById = createAsyncThunk(
  'raffleDetail/fetchById',
  async (id: string, { rejectWithValue }) => {
    try {
      const raffle = await getRaffleById(id);
      return raffle;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Error al cargar la rifa');
    }
  }
);

const raffleDetailSlice = createSlice({
  name: 'raffleDetail',
  initialState,
  reducers: {
    clearRaffleDetail: (state) => {
      state.raffleDetail = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRaffleById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.raffleDetail = null;
      })
      .addCase(fetchRaffleById.fulfilled, (state, action: PayloadAction<Raffle>) => {
        state.loading = false;
        state.raffleDetail = action.payload;
      })
      .addCase(fetchRaffleById.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as unknown as string;
      });
  },
});

export const { clearRaffleDetail } = raffleDetailSlice.actions;
export default raffleDetailSlice.reducer;
