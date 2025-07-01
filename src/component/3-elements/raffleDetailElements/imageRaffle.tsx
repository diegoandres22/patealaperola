import React from 'react';
import { Image } from "@heroui/image";

interface ImageRaffleProps {
    imageUrl: string;
}

export const ImageRaffle = ({ imageUrl }: ImageRaffleProps) => {
    return (
        <div className="w-full flex justify-center">
            <Image
                isBlurred
                alt="Imagen de la rifa"
                src={imageUrl}
                width={900}
            />
        </div>
    );
};
