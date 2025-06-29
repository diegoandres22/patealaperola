"use client"

import React from 'react'
import { CarrouselCardRaffles } from '@/component/2-sections'
import rafflesData from "../../../../public/rifas.json"
import OldRafflesData from "../../../../public/rifasAnteriores.json"



export const Start = () => {
  return (
    <div className='w-full min-h-[74vh] p-10 flex flex-col gap-10'>
      <div className="flex flex-col gap-6">
        <h2 className='text-4xl' >Nuestros sorteos activos</h2>

        <CarrouselCardRaffles rafflesData={rafflesData} ></CarrouselCardRaffles>

      </div>
      <div className="flex flex-col gap-6" >
        <h2 className='text-2xl' >Ultimos sorteos </h2>

        <CarrouselCardRaffles rafflesData={OldRafflesData}></CarrouselCardRaffles>

      </div>
    </div>
  )
}
