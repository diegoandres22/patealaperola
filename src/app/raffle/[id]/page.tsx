import { RafflesDetailScreen } from '@/component/1-screens'
import { getRaffleById } from '@/store/services/raffleService'
import type { Metadata } from 'next'
import React from 'react'

type Props = {
    params: Promise<{ id: string }>
}

// Genera los tags Open Graph/Twitter con los datos reales de la rifa
// (imagen, nombre, precio del boleto), para que al compartir el link por
// WhatsApp o pegarlo en cualquier chat se vea la vista previa con la
// imagen del premio en vez de una tarjeta genérica del sitio. Estos tags
// los leen los crawlers de cada app directamente del HTML — por eso este
// fetch debe correr en el servidor (RafflesDetailScreen carga los mismos
// datos otra vez del lado del cliente para la página en sí).
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params

    try {
        const raffle = await getRaffleById(id)
        const title = `${raffle.title} — Patea la Perola`
        const description = `${raffle.trophy ? `Gana: ${raffle.trophy}. ` : ''}Boletos desde $${raffle.ticket_price} c/u. ¡Participa ya!`
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://patealaperola.vercel.app'

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                url: `${siteUrl}/raffle/${id}`,
                images: raffle.image ? [{ url: raffle.image, width: 1200, height: 630, alt: raffle.title }] : undefined,
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: raffle.image ? [raffle.image] : undefined,
            },
        }
    } catch {
        // Rifa no encontrada o API caída: no rompas la página, solo pierde
        // la vista previa personalizada y cae al metadata genérico del sitio.
        return {
            title: 'Patea la perola',
            description: 'Participa ya y gana muchos premios',
        }
    }
}

export default function RaffleDetailApp() {
    return <RafflesDetailScreen />

}
