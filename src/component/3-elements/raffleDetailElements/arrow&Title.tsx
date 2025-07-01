import { Button } from '@heroui/react';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react';

interface ArrowAndTitleProps {
    title: string;
}

export const ArrowAndTitle = ({ title }: ArrowAndTitleProps) => {
    const handleBackClick = () => {
        window.history.back();  
    };

    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 flex'>
            <Button isIconOnly aria-label="Atras" variant="light" onClick={handleBackClick}>
                <IconArrowLeft stroke={3} className='text-white scale-110 md:scale-150' />
            </Button>
            <h3 className='text-2xl sm:text-4xl m-auto'>{title}</h3>
        </div>
    );
};
