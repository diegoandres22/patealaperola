import { Button, Skeleton } from '@heroui/react';
import { IconArrowLeft } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

interface ArrowAndTitleProps {
    title: string;
}

export const ArrowAndTitle = ({ title }: ArrowAndTitleProps) => {
    const handleBackClick = () => {
        window.history.back();
    };

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (title) {
            setIsLoading(false);
        }
    }, [title]);

    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 flex'>
            <Button isIconOnly aria-label="Atras" variant="light" onClick={handleBackClick}>
                <IconArrowLeft stroke={3} className='text-white scale-110 md:scale-150' />
            </Button>

            {isLoading ?
                <Skeleton className="rounded-md w-full h-full ">
                    <div className="h-auto w-full rounded-lg " />
                </Skeleton>
                :
                <h3 className='text-2xl sm:text-4xl m-auto'>{title}</h3>
            }
        </div>
    );
};
