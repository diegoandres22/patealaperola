"use client"

import React, { useEffect } from 'react'
import { CarrouselCardRaffles } from '@/component/2-sections'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { Raffle } from '@/types'
import { fetchRaffles } from '@/store/slices/rafflesSlice'


export const StartScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { raffles, loading, error } = useSelector((state: RootState) => state.Raffles   // 👈 coincide con store/index.ts
  );

  const activeAndLastRaffles = [
    ...raffles.filter((raffle: Raffle) => raffle.raffle_status === 1),
    ...raffles.filter((raffle: Raffle) => raffle.raffle_status === 2),
  ];

  const finishedRaffles = raffles.filter((raffle: Raffle) => raffle.raffle_status === 3);

  useEffect(() => {
    dispatch(fetchRaffles());
  }, [dispatch]);

  return (
    <div className='w-full min-h-[74vh] p-10 flex flex-col gap-10'>
      <div className="flex flex-col gap-6">
        <h2 className='text-4xl'>Sorteos activos</h2>
        <CarrouselCardRaffles raffles={activeAndLastRaffles} loading={loading} error={error} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className='text-2xl'>Sorteos finalizados</h2>
        <CarrouselCardRaffles raffles={finishedRaffles} loading={loading} error={error} />
      </div>
    </div>

  )
}
