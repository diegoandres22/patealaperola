import { Raffle } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Raffle = {
    "id": 11,
    "title": "Patea la Perola",
    "ticketPrice": 1,
    "minPurchase": 2,
    "raffleStatus": 1,
    "image": "https://lanchasvenezuela.com/wp-content/uploads/2023/09/MOTO-SEA-DOO-GTI-155-VENTA-DE-MOTO-SEA-DOO-GTI-155-MOTO-SEA-DOO-GTI-155-DE-HIGUEROTE-1.png",
    "description": "¡Participa en esta Gran Rifa de Patea la perola y gana!",
    "raffleDetails": {
        "trophy": "Machito 4 puertas 2020",
        "secondPrize": "$4,000 en EFECTIVO",
        "ticketNumbers": ["1232", "5345", "4232", "6732"],
        "additionalPrize": "$1,500 en efectivo"
    }
};
const raffleDetail = createSlice({
    name: "raffleDetail",
    initialState,
    reducers: {
        setRaffles: (state, action: PayloadAction<Raffle>) => {
            state = action.payload;
        }
    },

});
export const { setRaffles } = raffleDetail.actions;
export default raffleDetail.reducer;