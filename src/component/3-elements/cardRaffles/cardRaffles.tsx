import React from 'react'
import { Card, CardFooter, CardHeader, Chip, Link } from '@heroui/react'
import { Image } from "@heroui/image";
import { CardRafflesProps } from '@/types';

export const CardRaffles: React.FC<CardRafflesProps> = ({ title, imageUrl, ticketPrice, minPurchase, raffleStatus }) => {

    let chipLabel = '';
    let chipColor: 'danger' | 'success' | 'warning' | 'secondary' | 'primary' | 'default' = 'danger';

    switch (raffleStatus) {
        case 1:
            chipLabel = 'Activa';
            chipColor = 'success';
            break;
        case 2:
            chipLabel = 'Agotada';
            chipColor = 'warning';
            break;
        case 3:
            chipLabel = 'Finalizada';
            chipColor = 'danger';
            break;

    }

    return (
        <Link href="/raffle" className='w-[300px] h-[300px]' color='secondary'>
            <Card isFooterBlurred className="w-[300px] h-[300px] col-span-12 sm:col-span-5 hover:scale-110 transition-transform 
        duration-300 ease-in-out ">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="bg-black/70 px-2 text-lg text-white uppercase font-extrabold rounded-md ">{title}</p>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={imageUrl}
                />
                <CardFooter className="absolute bg-white/20 bottom-0 border-zinc-100/30 z-10 justify-between items-center max-h-14 pt-0">
                    <div className='max-h-10 '>
                        <p className="text-black font-bold text-lg max-h-6"> <strong className='text-xl'>{ticketPrice}$</strong> cada boleto</p>
                        <p className="text-black font-bold text-lg max-h-6">Compra mínima {minPurchase}</p>
                    </div>
                    <Chip color={chipColor} variant="dot" className="text-lg mt-4 text-black" radius="md" size="sm">
                        {chipLabel}
                    </Chip>
                </CardFooter>
            </Card>
        </Link>
    )
}

// import React from 'react'
// import { Card, CardFooter, CardHeader, Chip, Link } from '@heroui/react'
// import { Image } from "@heroui/image";
// import { CardRafflesProps } from '@/types';



// export const CardRaffles: React.FC<CardRafflesProps> = ({ title, imageUrl, ticketPrice, minPurchase }) => {
//     return (
//         <Link href="/raffle" className='w-[300px] h-[300px]' color='secondary'>
//             <Card isFooterBlurred className="w-[300px] h-[300px] col-span-12 sm:col-span-5 hover:scale-110 transition-transform
//         duration-300 ease-in-out ">
//                 <CardHeader className="absolute z-10 top-1 flex-col items-start">
//                     <p className="text-lg text-white/80 uppercase font-extrabold ">Patea la perola y gana</p>
//                     <h4 className="text-red-500 font-OFF font-black text-2xl ">{title}</h4>
//                 </CardHeader>
//                 <Image
//                     removeWrapper
//                     alt="Card example background"
//                     className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
//                     src={imageUrl}
//                 />
//                 <CardFooter className="absolute bg-white/20 bottom-0 border-zinc-100/30 z-10 justify-between items-center max-h-14 pt-0">
//                     <div className='max-h-10 '>
//                         <p className="text-black font-bold text-lg max-h-6"> <strong className='text-xl'>{ticketPrice}$</strong> cada boleto</p>
//                         <p className="text-black font-bold text-lg max-h-6">Compra mínima {minPurchase}</p>
//                     </div>
//                     <Chip color="danger" variant="dot" className="text-lg mt-4 text-black" radius="md" size="sm">
//                         Finalizada
//                     </Chip>
//                 </CardFooter>
//             </Card>
//         </Link>
//     )
// }