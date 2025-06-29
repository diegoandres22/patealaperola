"use client"
import React from 'react'
import { ArrowAndTitle, ImageRaffle, PurchaseForm, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'
import { ValidateTicket } from '@/component/3-elements/raffleDetailElements/validateTicket'

export const RaffleDetailSection = () => {
    return (
        <div className="min-h-screen w-11/12 md:w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">
            <ArrowAndTitle />
            <ImageRaffle />
            <div className="flex xl:hidden">
                <RaffleData />
            </div>
            <div className=" hidden xl:flex">
                <RaffleData />
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
