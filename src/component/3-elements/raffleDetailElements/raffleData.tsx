import React from 'react';

interface RaffleDataProps {
    description: string;
    trophy: string;
    secondPrize: string;
    ticketNumbers: string[];
    additionalPrize: string;
}

export const RaffleData = ({
    description,
    trophy,
    secondPrize,
    ticketNumbers,
    additionalPrize
}: RaffleDataProps) => {
    return (
        <div className='flex flex-col sm:mx-6 px-10 2xl:px-[10%] gap-2'>
            <p>{description}</p>
            <h2 className='text-4xl'>{trophy}</h2>
            <h3>{secondPrize}</h3>
            <p className='mt-5'>También ganan</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl pb-4 pt-2 px-4 shadow-2xl gap-2 h-full w-full">
                    <h5 className='w-full font-bold '>Tickets premiados</h5>
                    <div className="flex flex-wrap w-full h-full ">
                        {ticketNumbers.map((ticket, index) => (
                            <div key={index} className="w-1/2 h-1/2 flex items-center justify-center my-1">
                                <p className='border-1 p-1 rounded-md'>{ticket}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl p-4 shadow-2xl gap-2 h-full w-full">
                    <h4 className='w-full font-bold'>Quien compre más números</h4>
                    <p>{additionalPrize}</p>
                </div>
            </div>
        </div>
    );
};
