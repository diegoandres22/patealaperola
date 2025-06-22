"use client"

import React from 'react'
import { CarrouselCardRaffles, CarrouselPreviousRaffles, } from '@/component/2-sections'


export const Start = () => {
  return (
    <div className='w-full min-h-[74vh] p-10 flex flex-col gap-10'>
      <CarrouselCardRaffles></CarrouselCardRaffles>
      <CarrouselPreviousRaffles></CarrouselPreviousRaffles>
    </div>
  )
}
