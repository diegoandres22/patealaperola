import { Button } from '@heroui/react'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'

export const ArrowAndTitle = () => {
    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 flex  '>
            <Button isIconOnly aria-label="Atras" variant="light" >
                <IconArrowLeft stroke={3} className='text-white scale-150' />
            </Button>

            <h3 className='text-4xl m-auto'>Nombre del sorteo </h3>
        </div>
    )
}
