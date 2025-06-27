import React from 'react'

export const RaffleData = () => {
    return (
        <div className=' w-full flex flex-col p-5 2xl:px-[10%] gap-2'>
            <p>
                ¡ Participa en esta Gran Rifa de Patea la perola y gana !
            </p>
            <h2 className='text-4xl '>Machito 4 puertas 2020</h2>
            <h3>
                💰 2do Premio: $4,000 en EFECTIVO
            </h3>

            <p className='mt-5'>También ganan quienes</p>

            <div className="flex flex-col sm:flex-row items-center gap-4">

                <div className="flex flex-col bg-neutral-700/20 rounded-2xl p-4 shadow-2xl gap-2 min-h-40">
                    <h5 className='w-full font-extrabold'>Le salga un Tickets premiado</h5>
                    <div className="flex flex-wrap w-full h-full ">
                        <div className="w-1/2 h-1/2 flex items-center justify-center my-2">
                            <p className=' border-1 p-1 rounded-md'>1232</p>
                        </div>
                        <div className="w-1/2 h-1/2 flex items-center justify-center my-2">
                            <p className=' border-1 p-1 rounded-md'>1232</p>
                        </div>
                        <div className="w-1/2 h-1/2 flex items-center justify-center my-2">
                            <p className=' border-1 p-1 rounded-md'>1232</p>
                        </div>
                        <div className="w-1/2 h-1/2 flex items-center justify-center my-2">
                            <p className=' border-1 p-1 rounded-md'>1232</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col bg-neutral-700/20 rounded-2xl p-4 shadow-2xl max-w-56 gap-2 min-h-40">
                    <h4 className='w-full font-extrabold'>Quien compre mas numeros se lleva</h4>
                    <p>1000$ en efectivo</p>
                </div>

            </div>
        </div>
    )
}
