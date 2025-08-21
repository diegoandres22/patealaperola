import React from 'react'
import { CardRaffles } from '@/component/3-elements'
import { RafflesState } from '@/types' // Asegúrate de importar correctamente el tipo
import { Skeleton } from '@heroui/react';
import { IconExclamationCircle } from '@tabler/icons-react';

export const CarrouselCardRaffles: React.FC<RafflesState> = ({ raffles, loading, error }) => {
    if (loading) {
        // Render Skeleton mientras carga
        return (
            <div className="flex flex-wrap gap-10">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Skeleton key={idx} className="rounded-lg w-[300px] h-[300px]">
                        <div className="h-24 rounded-lg bg-default-300" />
                    </Skeleton>
                ))}
            </div>
        );
    }

    if (error) {
        // Renderiza los errores de forma elegante y legible
        return (
            <div className="flex flex-wrap gap-10">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="w-[300px] h-[300px] bg-gray-800 rounded-lg flex items-center justify-center p-4 gap-6 flex-col"
                    >
                        <IconExclamationCircle stroke={2} className='scale-150'/>
                        <p className="text-white text-center font-medium break-words">
                            {error}
                        </p>
                    </div>
                ))}
            </div>
        );
    }



    // Render normal de rifas
    return (
        <div className="flex md:w-full flex-col md:flex-row items-center md:items-start gap-10 flex-wrap" id="Winners">
            {raffles.map((raffle, index) => (
                <CardRaffles
                    id={raffle.id}
                    key={index}
                    title={raffle.title}
                    image={raffle.image}
                    ticket_price={raffle.ticket_price}
                    min_purchase={raffle.min_purchase}
                    raffle_status={raffle.raffle_status}
                    description={raffle.description}
                    trophy={raffle.trophy}
                    secondPrize={raffle.secondPrize}
                    total_tickets={raffle.total_tickets}
                    additionalPrize={raffle.additionalPrize}
                    premium_ticket6={raffle.premium_ticket6}
                    tickets_sold_list={raffle.tickets_sold_list}
                    premium_ticket1={raffle.premium_ticket1}
                    lottery_date={raffle.lottery_date}
                    premium_ticket2={raffle.premium_ticket2}
                    created_by={raffle.created_by}
                    premium_ticket3={raffle.premium_ticket3}
                    updated_by={raffle.updated_by}
                    premium_ticket4={raffle.premium_ticket4}
                    created_at={raffle.created_at}
                    state={raffle.state}
                    premium_ticket5={raffle.premium_ticket5}
                    updated_at={raffle.updated_at}
                />
            ))}
        </div>
    );
    // return (
    //     <div className="flex md:w-full flex-col md:flex-row items-center md:items-start gap-10 flex-wrap " id='Winners'>
    //         {raffles.map((raffle, index) => (
    //             <CardRaffles
    //                 id={raffle.id}
    //                 key={index}
    //                 title={raffle.title}
    //                 image={raffle.image}
    //                 ticket_price={raffle.ticket_price}
    //                 min_purchase={raffle.min_purchase}
    //                 raffle_status={raffle.raffle_status} description={raffle.description}
    //                 trophy={raffle.trophy} secondPrize={raffle.secondPrize}
    //                 total_tickets={raffle.total_tickets} additionalPrize={raffle.additionalPrize} 
    //                 premium_ticket6={raffle.premium_ticket6} tickets_sold_list={raffle.tickets_sold_list} premium_ticket1={raffle.premium_ticket1} 
    //                 lottery_date={raffle.lottery_date} premium_ticket2={raffle.premium_ticket2} created_by={raffle.created_by} premium_ticket3={raffle.premium_ticket3}
    //                  updated_by={raffle.updated_by} premium_ticket4={raffle.premium_ticket4} created_at={raffle.created_at} state={raffle.state} 
    //                  premium_ticket5={raffle.premium_ticket5} updated_at={raffle.updated_at}                />
    //         ))}
    //     </div>
    // )
}
