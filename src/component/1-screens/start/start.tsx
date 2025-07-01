"use client"

import React from 'react'
import { CarrouselCardRaffles } from '@/component/2-sections'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Raffle } from '@/types'



export const Start = () => {
  const raffles = useSelector((state: RootState) => state.Raffles.raffles)

  const activeAndLastRaffles = [
    ...raffles.filter((raffle: Raffle) => raffle.raffleStatus === 1),
    ...raffles.filter((raffle: Raffle) => raffle.raffleStatus === 2),
  ];

  const finishedRaffles = raffles.filter((raffle: Raffle) => raffle.raffleStatus === 3);

  return (
    <div className='w-full min-h-[74vh] p-10 flex flex-col gap-10'>
      <div className="flex flex-col gap-6">
        <h2 className='text-4xl'>Sorteos activos</h2>
        <CarrouselCardRaffles raffles={activeAndLastRaffles} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className='text-2xl'>Sorteos finalizados</h2>
        <CarrouselCardRaffles raffles={finishedRaffles} />
      </div>
    </div>

  )
}
