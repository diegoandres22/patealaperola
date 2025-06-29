import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScrollState {

    change: number,
    color: string,
    image: string,
    last_update: string,
    percent: number,
    price: number,
    price_old: number,
    symbol: string,
    title: string

}
const initialState: ScrollState = {
    change: 0.76,
    color: "green",
    image: "https://res.cloudinary.com/dcpyfqx87/image/upload/v1729921477/monitors/public_id:united-states.webp",
    last_update: "30/06/2025, 12:00 AM",
    percent: 0.71,
    price: 107.62,
    price_old: 106.86,
    symbol: "$",
    title: "Dolar estadounidense"
};
const rateBcvSlice = createSlice({
    name: "rateBcv",
    initialState,
    reducers: {
        setRateBcv: (state, action: PayloadAction<ScrollState>) => {
            state = action.payload;
        },
    },
});
export const { setRateBcv, } = rateBcvSlice.actions;
export default rateBcvSlice.reducer;