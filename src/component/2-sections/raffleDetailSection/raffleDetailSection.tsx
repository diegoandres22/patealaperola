"use client"
import React from 'react'
import { ArrowAndTitle, ImageRaffle, PurchaseForm, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'
import { ValidateTicket } from '@/component/3-elements/raffleDetailElements/validateTicket'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { RaffleDetailState } from '@/types'
import { IconExclamationCircle } from '@tabler/icons-react'


export const RaffleDetailSection: React.FC<RaffleDetailState> = ({ raffleDetail, loading, error }) => {


    const { } = useSelector((state: RootState) => state.RaffleDetail);

    if (error) {
        return (
            <div className="min-h-[74vh] w-full flex items-center justify-center">
                <div className="bg-blue-800/20 border border-blue-500 rounded-2xl shadow-lg p-8 max-w-md text-center flex flex-col items-center gap-4">
                    <IconExclamationCircle stroke={2} className="scale-150 text-red-600" />
                    <h2 className="text-xl font-semibold text-red-700">Ha ocurrido un error</h2>
                    <p className="text-red-600/90">{error}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen w-11/12 md:w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">

            <ArrowAndTitle title={raffleDetail?.title} loading={loading} />
            <ImageRaffle image={raffleDetail?.image} loading={loading} />
            <div className="flex xl:hidden">
                <RaffleData
                    description={raffleDetail?.description} id={raffleDetail?.id} ticketPrice={raffleDetail?.ticket_price}
                    minPurchase={raffleDetail?.min_purchase} raffleStatus={raffleDetail?.raffle_status}
                    trophy={raffleDetail?.trophy} secondPrize={raffleDetail?.secondPrize}
                    additionalPrize={raffleDetail?.additionalPrize} loading={loading} />
            </div>
            <div className=" hidden xl:flex">
                <RaffleData
                    description={raffleDetail?.description} id={raffleDetail?.id} ticketPrice={raffleDetail?.ticket_price}
                    minPurchase={raffleDetail?.min_purchase} raffleStatus={raffleDetail?.raffle_status}
                    trophy={raffleDetail?.trophy} secondPrize={raffleDetail?.secondPrize}
                    additionalPrize={raffleDetail?.additionalPrize} loading={loading} />
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
