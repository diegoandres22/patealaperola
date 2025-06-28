import React from 'react'
import { Image } from "@heroui/image";
import { Link } from '@heroui/react';


export const LogoImage = () => {
    return (
        <div>
            <Link href="/" >
                <Image
                    src="./isologo.png"
                    width={120}
                    height={80}
                    alt="Marca del sitio"
                />
            </Link>
        </div>
    )
}
