import React from 'react'
import { CardRaffles } from '@/component/3-elements'
import { RafflesState } from '@/types' // Asegúrate de importar correctamente el tipo

export const CarrouselCardRaffles: React.FC<RafflesState> = ({ raffles }) => {
    return (
        <div className="flex md:w-full flex-col md:flex-row items-center md:items-start gap-10 flex-wrap " id='Winners'>
            {raffles.map((raffle, index) => (
                <CardRaffles
                    id={index}
                    key={index}
                    title={raffle.title}
                    image={raffle.image}
                    ticketPrice={raffle.ticketPrice}
                    minPurchase={raffle.minPurchase}
                    raffleStatus={raffle.raffleStatus} description={''}
                    raffleDetails={raffle.raffleDetails} />
            ))}
        </div>
    )
}
