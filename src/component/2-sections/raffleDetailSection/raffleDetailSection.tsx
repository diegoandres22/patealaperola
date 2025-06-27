"use client"
import React from 'react'
import { ArrowAndTitle, ImageRaffle, RaffleData } from '@/component/3-elements'
import { Divider } from '@heroui/react'

export const RaffleDetailSection = () => {
    return (
        <div className="min-h-screen w-3/4 bg-neutral-700/30 rounded-xl flex flex-col gap-5">
            <ArrowAndTitle />
            <ImageRaffle />
            <RaffleData />
            <Divider className="my-4 bg-white/50 w-10/12 mx-auto" />

        </div>
    )
}
