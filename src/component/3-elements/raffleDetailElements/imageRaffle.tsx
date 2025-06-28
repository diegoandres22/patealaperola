import React from 'react'
import { Image } from "@heroui/image";


export const ImageRaffle = () => {
    return (
        <div className="w-full flex justify-center">

            <Image
              isBlurred
                alt="Imagen de la rifa"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={900}
            />
        </div>
    )
}
