import { Button } from '@heroui/react'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'

export const ArrowAndTitle = () => {

    const handleBackClick = () => {
        window.history.back();  // O puedes usar window.history.go(-1);
    };


    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 flex  '>
            <Button isIconOnly aria-label="Atras" variant="light" onClick={handleBackClick} >
                <IconArrowLeft stroke={3} className='text-white scale-110 md:scale-150' />
            </Button>

            <h3 className='text-2xl sm:text-4xl m-auto'>Nombre del sorteo </h3>
        </div>
    )
}
