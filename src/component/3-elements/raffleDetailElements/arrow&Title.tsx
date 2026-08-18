"use client"

// Los componentes de HeroUI usan React Context, que solo funciona en
// componentes de cliente. Sin esta directiva el servidor falla con
// "createContext only works in Client Components".
import { Button, Skeleton } from '@heroui/react';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react';


type ArrowAndTitleProps = {
    title: string | undefined;
    loading: boolean;
};

export const ArrowAndTitle = ({ title, loading }: ArrowAndTitleProps): React.JSX.Element => {

    const handleBackClick = () => {
        window.history.back();
    };



    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 flex'>
            <Button isIconOnly aria-label="Atras" variant="light" onClick={handleBackClick}>
                <IconArrowLeft stroke={3} className='text-white scale-110 md:scale-150' />
            </Button>

            {loading ?
                <Skeleton className="rounded-md w-full h-full ">
                    <div className="h-auto w-full rounded-lg " />
                </Skeleton>
                :
                <h3 className='text-2xl sm:text-4xl m-auto'>{title}</h3>
            }
        </div>
    );
};
