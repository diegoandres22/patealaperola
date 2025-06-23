import React from 'react'
import { CardRaffles } from '@/component/3-elements'
import { CarrouselCardRafflesProps } from '@/types'



export const CarrouselCardRaffles: React.FC<CarrouselCardRafflesProps> = ({ rafflesData }) => {
    return (

        <div className="flex md:w-full flex-col md:flex-row items-center md:items-start gap-10 flex-wrap">

            {rafflesData.map((raffle, index) => (
                <CardRaffles
                    id={index}
                    key={index}
                    title={raffle.title}
                    imageUrl={raffle.imageUrl}
                    ticketPrice={raffle.ticketPrice}
                    minPurchase={raffle.minPurchase}
                    raffleStatus={raffle.raffleStatus} />
            ))}
        </div>
    )
}
