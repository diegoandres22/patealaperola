import React, { useEffect, useState } from 'react';
import { Image } from '@heroui/image';
import { Skeleton } from '@heroui/react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';


export const ImageRaffle = ({ imageUrl }: {
    imageUrl: string;
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const raffleState = useSelector((state: RootState) => state.RaffleDetail.image);

    useEffect(() => {

        if (raffleState) {
            setIsLoading(false)
        }

    }, [raffleState]);

    return (
        <div className="w-full flex justify-center">

            {isLoading ?
                <div className="h-full w-full p-10">
                    <Skeleton className=" rounded-2xl h-full w-full">
                        <div className="h-80 rounded-lg " />
                    </Skeleton>
                </div>
                :
                <Image
                    isBlurred
                    alt="Imagen de la rifa"
                    src={imageUrl}
                    width={900}
                    onLoad={() => setIsLoading(false)}
                />
            }
        </div>
    );
};
