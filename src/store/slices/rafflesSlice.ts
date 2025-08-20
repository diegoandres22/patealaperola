import { Raffle, RafflesState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allRaffles } from "./raffleDetailSlice";


const initialState: RafflesState = {
    raffles: allRaffles
}

const raffleSlice = createSlice({
    name: "raffles",
    initialState,
    reducers: {
        setRaffles: (state, action: PayloadAction<Raffle[]>) => {
            state.raffles = action.payload;
        }
    },
});

export default raffleSlice.reducer;
