"use client"

// Los componentes de HeroUI usan React Context, que solo funciona en
// componentes de cliente. Sin esta directiva el servidor falla con
// "createContext only works in Client Components".
import React from 'react'
import { Image } from "@heroui/react";
import { Link } from '@heroui/react';
import isologo from '@/app/isologo.png';


export const LogoImage = () => {
    return (
        <Link href="/" >
            {isologo?.src && (
                <Image
                    src={isologo.src}
                    width={120}
                    height={80}
                    alt="Marca del sitio"
                />
            )}
        </Link>
    )
}
