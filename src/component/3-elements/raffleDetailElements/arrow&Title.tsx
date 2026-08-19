"use client"

// Los componentes de HeroUI usan React Context, que solo funciona en
// componentes de cliente. Sin esta directiva el servidor falla con
// "createContext only works in Client Components".
import { Button, Skeleton, Tooltip, addToast } from '@heroui/react';
import { IconArrowLeft, IconCheck, IconShare } from '@tabler/icons-react';
import React, { useState } from 'react';


type ArrowAndTitleProps = {
    title: string | undefined;
    loading: boolean;
};

export const ArrowAndTitle = ({ title, loading }: ArrowAndTitleProps): React.JSX.Element => {
    const [copied, setCopied] = useState(false);

    const handleBackClick = () => {
        window.history.back();
    };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = {
            title: title ? `${title} — Patea la Perola` : 'Patea la Perola',
            text: title ? `¡Participa en la rifa "${title}" y gana!` : '¡Participa y gana!',
            url,
        };

        // navigator.share abre el selector nativo (WhatsApp, Telegram, etc.
        // incluidos) en celulares y navegadores compatibles. La vista previa
        // atractiva (imagen, nombre, precio) la arma automáticamente cada
        // app usando los tags Open Graph de la página (ver generateMetadata
        // en src/app/raffle/[id]/page.tsx) — no depende de este botón.
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // El usuario cerró el selector sin elegir nada: no es un error real.
            }
            return;
        }

        // Fallback para escritorio / navegadores sin Web Share API: copiar el link.
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            addToast({
                title: 'Enlace copiado',
                description: 'Pégalo en cualquier chat para compartir la rifa',
                color: 'success',
            });
            setTimeout(() => setCopied(false), 2000);
        } catch {
            addToast({ title: 'No se pudo copiar el enlace', color: 'danger' });
        }
    };

    return (
        <div className='w-full md:w-4/5 pt-6 pl-6 pr-6 flex items-center'>
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

            {!loading && (
                <Tooltip content="Compartir rifa">
                    <Button isIconOnly aria-label="Compartir rifa" variant="light" onClick={handleShare}>
                        {copied
                            ? <IconCheck stroke={3} className='text-green-400 scale-110 md:scale-150' />
                            : <IconShare stroke={3} className='text-white scale-110 md:scale-150' />}
                    </Button>
                </Tooltip>
            )}
        </div>
    );
};
