import React from 'react'
import { Chip, Tooltip } from '@heroui/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'


export const RateBcv = () => {
    const rateBcv = useSelector((state: RootState) => state.RateBcv.price)
    return (
        <div className='w-full absolute flex justify-end '>
            <Tooltip content="Tasa Banco Central de Venezuela" showArrow={true} >
                <Chip radius='none'>Tasa Bcv : {rateBcv}  bs</Chip>
            </Tooltip>
        </div>
    )
}
