import { Chip, Tooltip } from '@heroui/react'
import React from 'react'

export const RateBcv = () => {
    return (
        <div className='w-full absolute flex justify-end '>
            <Tooltip content="Tasa Banco Central de Venezuela" showArrow={true} >
                <Chip radius='none'>Tasa Bcv : 107.62 bs</Chip>
            </Tooltip>
        </div>
    )
}
