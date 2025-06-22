import React from 'react'
import { CardRaffles } from '@/component/3-elements'

export const CarrouselCardRaffles = () => {
    return (
        <div className="flex flex-col gap-6">
            <h2 className='text-3xl'>Nuestros sorteos activos</h2>
            <CardRaffles></CardRaffles>
        </div>
    )
}
