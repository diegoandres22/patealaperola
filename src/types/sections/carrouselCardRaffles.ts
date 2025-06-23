interface Raffle {
    title: string;
    imageUrl: string;
    ticketPrice: number;
    minPurchase: number;
    raffleStatus: number;

}

export interface CarrouselCardRafflesProps {
    rafflesData: Raffle[];
}