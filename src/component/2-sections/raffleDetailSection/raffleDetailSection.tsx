"use client"
import React, { useEffect } from 'react'
import { ArrowAndTitle, ImageRaffle, PurchaseForm, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'
import { ValidateTicket } from '@/component/3-elements/raffleDetailElements/validateTicket'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { useParams } from 'next/navigation'
import { setRaffleById } from '@/store/slices/raffleDetailSlice'

export const RaffleDetailSection = () => {
    const dispatch = useDispatch<AppDispatch>();

    const params = useParams<{ id: string }>()
    const {id, title, image, description, raffleDetails, ticketPrice, minPurchase } = useSelector((state: RootState) => state.RaffleDetail);

    useEffect(() => {
        const raffleId = parseInt(params.id, 10);
        if (!isNaN(raffleId)) {
            dispatch(setRaffleById(raffleId));
        }
    }, [params.id, dispatch]);

    return (
        <div className="min-h-screen w-11/12 md:w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">

            <ArrowAndTitle title={title} />
            <ImageRaffle imageUrl={image} />
            <div className="flex xl:hidden">
                <RaffleData
                    description={description}
                    raffleDetails={raffleDetails}
                    id={id} ticketPrice={ticketPrice}
                    minPurchase={minPurchase} raffleStatus={0}
                    title={''} image={''} />
            </div>
            <div className=" hidden xl:flex">
                <RaffleData
                    description={description}
                    raffleDetails={raffleDetails}
                    id={0} ticketPrice={0}
                    minPurchase={0} raffleStatus={0}
                    title={''} image={''} />
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
