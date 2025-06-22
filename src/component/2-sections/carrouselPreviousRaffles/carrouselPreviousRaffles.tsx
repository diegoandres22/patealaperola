import { CardRaffles } from '@/component/3-elements'
import React from 'react'

export const CarrouselPreviousRaffles = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-3xl'>Sorteos anteriores</h2>
            <CardRaffles></CardRaffles>
        </div>
    )
}
