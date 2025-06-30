import { Raffle, RafflesState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: RafflesState = {
    raffles: [
        {
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
        },
        {
            "id": 12,
            "title": "Machito Deportivo",
            "ticketPrice": 1,
            "minPurchase": 3,
            "raffleStatus": 2,
            "image": "https://i.pinimg.com/originals/28/37/c3/2837c3003feb2dea72446c3554bae990.jpg",
            "description": "¡Gana un coche deportivo de lujo y más premios increíbles!",
            "raffleDetails": {
                "trophy": "Porsche 911 Carrera 2021",
                "secondPrize": "$5,000 en EFECTIVO",
                "ticketNumbers": ["2345", "6789", "1123", "4456"],
                "additionalPrize": "$2,000 en efectivo"
            }
        },
        {
            "id": 13,
            "title": "Corolla Soñado ",
            "ticketPrice": 1,
            "minPurchase": 4,
            "raffleStatus": 3,
            "image": "https://cdn3.riastatic.com/photosnew/auto/photo/toyota_corolla__569815708f.jpg",
            "description": "Gana un viaje todo pagado para dos personas a Europa. ¡Una oportunidad única!",
            "raffleDetails": {
                "trophy": "Viaje de 10 días por Europa",
                "secondPrize": "Bono de $3,000 para viajes",
                "ticketNumbers": ["5678", "9876", "4532", "7890"],
                "additionalPrize": "$1,000 en efectivo"
            }
        },
        {
            "id": 14,
            "title": "Harley Davidson 2022",
            "ticketPrice": 1,
            "minPurchase": 5,
            "raffleStatus": 3,
            "image": "https://img.olx.com.br/images/53/538495577085359.jpg",
            "description": "¡Gana una motocicleta Harley Davidson y otros premios de lujo!",
            "raffleDetails": {
                "trophy": "Harley Davidson 2022",
                "secondPrize": "$2,500 en EFECTIVO",
                "ticketNumbers": ["3456", "7891", "6723", "2341"],
                "additionalPrize": "$1,500 en efectivo"
            }
        }
    ]
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
