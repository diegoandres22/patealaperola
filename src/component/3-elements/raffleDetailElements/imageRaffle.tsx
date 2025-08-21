import React, { useEffect } from 'react';
import { Image } from '@heroui/image';
import { Skeleton } from '@heroui/react';

type ImageProps = {
    image: string | undefined;
    loading: boolean;
};

export const ImageRaffle: React.FC<ImageProps> = ({ image, loading }) => {

    useEffect(() => {


    }, [image, loading]);

    return (
        <div className="w-full flex justify-center">

            {loading ?
                <div className="h-full w-full p-10">
                    <Skeleton className=" rounded-2xl h-full w-full">
                        <div className="h-80 rounded-lg " />
                    </Skeleton>
                </div>
                :
                <Image
                    isBlurred
                    alt="Imagen de la rifa"
                    src={image}
                    width={500}
                />
            }
        </div>
    );
};
