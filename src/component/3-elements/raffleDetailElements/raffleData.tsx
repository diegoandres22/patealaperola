"use client"

// Los componentes de HeroUI usan React Context, que solo funciona en
// componentes de cliente. Sin esta directiva el servidor falla con
// "createContext only works in Client Components".
import { RaffleDataProps } from '@/types';
import { Skeleton } from '@heroui/react';
import { IconTicket } from '@tabler/icons-react';
import React from 'react';



export const RaffleData: React.FC<RaffleDataProps> = ({
    description, ticketPrice, minPurchase, trophy, secondPrize, additionalPrize, loading,
    premiumTicket1, premiumTicket2, premiumTicket3, premiumTicket4, premiumTicket5, premiumTicket6,
}) => {
    // Antes esta lista estaba hardcodeada ("6666","7777","1982","9944": datos
    // de prueba que nunca se conectaron a la rifa real). Ahora sale de los
    // premium_ticketN reales de la rifa, filtrando los que el admin no marcó
    // (la API los manda como null).
    const premiumTickets = [premiumTicket1, premiumTicket2, premiumTicket3, premiumTicket4, premiumTicket5, premiumTicket6]
        .filter((ticket): ticket is number | string => ticket !== null && ticket !== undefined && ticket !== "");


    return (
        <div className='flex flex-col sm:mx-6 px-10 2xl:px-[10%] gap-2'>

            {loading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <p>{description}</p>
            )}

            {loading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <h2 className="text-4xl">{trophy}</h2>
            )}
            <p>O también </p>

            {loading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <h3>{secondPrize}</h3>
            )}

            <p className='mt-5'>También ganan</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl pb-4 pt-2 px-4 shadow-2xl gap-2 h-full w-full">
                    <h5 className='w-full font-bold '>Tickets premiados</h5>

                    <div className="flex flex-wrap w-full h-full">
                        {loading ? (
                            <Skeleton className="rounded-md w-full h-full">
                                <div className="h-10 w-full rounded-lg" />
                            </Skeleton>
                        ) : premiumTickets.length === 0 ? (
                            <p className="text-sm text-neutral-400">Ninguno</p>
                        ) : (
                            premiumTickets.map((ticket, index) => (
                                <div key={index} className="w-1/2 h-1/2 flex items-center justify-center my-1">
                                    <p className="border-1 p-1 rounded-md">{ticket}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl p-4 shadow-2xl gap-2 h-full w-full">
                    <h4 className='w-full font-bold'>Quien compre más números</h4>
                    {loading ? (
                        <Skeleton className="rounded-md w-full h-full">
                            <div className="h-10 w-full rounded-lg" />
                        </Skeleton>
                    ) : (
                        <p>{additionalPrize}</p>
                    )}
                </div>
            </div>
            <div className="w-full h-auto flex gap-2 sm:gap-0 pt-2 justify-between flex-col sm:flex-row">
                <p>Precio del ticket: {ticketPrice}$</p>
                <p className='flex gap-1 text-nowrap'>Compra mínima: {minPurchase} <IconTicket stroke={1} /></p>
            </div>
        </div>
    );
};
