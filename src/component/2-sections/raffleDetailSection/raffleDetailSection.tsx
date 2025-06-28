"use client"
import React from 'react'
import { ArrowAndTitle, ImageRaffle, PurchaseForm, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'

export const RaffleDetailSection = () => {
    return (
        <div className="min-h-screen w-11/12 md:w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">
            <ArrowAndTitle />
            <ImageRaffle />
            <RaffleData />
            <Divider className="my-1 bg-white/50 w-10/12 mx-auto" />
            <PurchaseForm/>
        </div>
    )
}
