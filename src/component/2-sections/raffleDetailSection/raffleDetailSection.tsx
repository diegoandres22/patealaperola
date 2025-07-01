"use client"
import React from 'react'
import { ArrowAndTitle, ImageRaffle, PurchaseForm, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'
import { ValidateTicket } from '@/component/3-elements/raffleDetailElements/validateTicket'

export const RaffleDetailSection = () => {

    const data = {
        title: "Gran Rifa de Patea la Perola",
        image: "https://heroui.com/images/hero-card-complete.jpeg",
        description: "¡Participa en esta Gran Rifa de Patea la perola y gana!",
        raffleDetails: {
            trophy: "Machito 4 puertas 2020",
            secondPrize: "$4,000 en EFECTIVO",
            ticketNumbers: ["1232", "5345", "4232", "6732"],
            additionalPrize: "$1,500 en efectivo"
        }
    };


    return (
        <div className="min-h-screen w-11/12 md:w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">
            <ArrowAndTitle title={data.title} />
            <ImageRaffle imageUrl={data.image} />
            <div className="flex xl:hidden">
                <RaffleData
                    description={data.description}
                    trophy={data.raffleDetails.trophy}
                    secondPrize={data.raffleDetails.secondPrize}
                    ticketNumbers={data.raffleDetails.ticketNumbers}
                    additionalPrize={data.raffleDetails.additionalPrize}
                />
            </div>
            <div className=" hidden xl:flex">
                <RaffleData
                    description={data.description}
                    trophy={data.raffleDetails.trophy}
                    secondPrize={data.raffleDetails.secondPrize}
                    ticketNumbers={data.raffleDetails.ticketNumbers}
                    additionalPrize={data.raffleDetails.additionalPrize}
                />
                <ValidateTicket />
            </div>
            <Divider className="my-1 bg-white/50 w-10/12 mx-auto" />
            <PurchaseForm />
            <div className="px-10 2xl:px-[10%] xl:hidden flex justify-center">
                <ValidateTicket />
            </div>
        </div>
    )
}
