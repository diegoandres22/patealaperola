import { Raffle } from '@/types';
import { Skeleton } from '@heroui/react';
import { IconTicket } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';


export const RaffleData: React.FC<Raffle> = ({ description, raffleDetails, ticketPrice, minPurchase }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (raffleDetails && raffleDetails.trophy) {
            setIsLoading(false);
        }
    }, [raffleDetails]);


    return (
        <div className='flex flex-col sm:mx-6 px-10 2xl:px-[10%] gap-2'>

            {isLoading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <p>{description}</p>
            )}

            {isLoading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <h2 className="text-4xl">{raffleDetails.trophy}</h2>
            )}
            <p>O también </p>

            {isLoading ? (
                <Skeleton className="rounded-md w-full h-full">
                    <div className="h-10 w-full rounded-lg" />
                </Skeleton>
            ) : (
                <h3>{raffleDetails.secondPrize}</h3>
            )}

            <p className='mt-5'>También ganan</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl pb-4 pt-2 px-4 shadow-2xl gap-2 h-full w-full">
                    <h5 className='w-full font-bold '>Tickets premiados</h5>

                    <div className="flex flex-wrap w-full h-full">
                        {isLoading ? (
                            <Skeleton className="rounded-md w-full h-full">
                                <div className="h-10 w-full rounded-lg" />
                            </Skeleton>
                        ) : (
                            raffleDetails.ticketNumbers.map((ticket, index) => (
                                <div key={index} className="w-1/2 h-1/2 flex items-center justify-center my-1">
                                    <p className="border-1 p-1 rounded-md">{ticket}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl p-4 shadow-2xl gap-2 h-full w-full">
                    <h4 className='w-full font-bold'>Quien compre más números</h4>
                    {isLoading ? (
                        <Skeleton className="rounded-md w-full h-full">
                            <div className="h-10 w-full rounded-lg" />
                        </Skeleton>
                    ) : (
                        <p>{raffleDetails.additionalPrize}</p>
                    )}
                </div>
            </div>
            <div className="w-full h-auto flex pt-2 justify-between">
                <p>Precio del ticket:{ticketPrice}$</p>
                <p className='flex gap-1'>Compra mínima: {minPurchase} <IconTicket stroke={1} /></p>
            </div>
        </div>
    );
};
