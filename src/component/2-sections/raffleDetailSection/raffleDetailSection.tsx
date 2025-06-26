"use client"
import React from 'react'
import { ArrowAndTitle } from '@/component/3-elements'
import { ImageRaffle } from '@/component/3-elements/raffleDetailElements/imageRaffle'

export const RaffleDetailSection = () => {
    return (
        <div className="min-h-screen w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">
            <ArrowAndTitle />
            <ImageRaffle />
        </div>
    )
}
