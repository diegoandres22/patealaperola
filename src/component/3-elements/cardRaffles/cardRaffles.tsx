import React from 'react'
import { Button, Card, CardFooter, CardHeader } from '@heroui/react'
import { Image } from "@heroui/image";


export const CardRaffles = () => {
    return (

        <Card isFooterBlurred className="w-[300px] h-[300px] col-span-12 sm:col-span-5 hover:scale-110 transition-transform duration-300 ease-in-out">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-lg text-white/80 uppercase font-extrabold ">Patea la perola y gana</p>
                <h4 className=" text-red-500 font-OFF font-black text-2xl ">Un Toyota Corolla </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://cdn3.riastatic.com/photosnew/auto/photo/toyota_corolla__569815708f.jpg"

            />
            <CardFooter className="absolute bg-white/20 bottom-0 border-zinc-100/30 z-10 justify-between items-center max-h-14 pt-0">
                <div className='max-h-10 '>
                    <p className="text-black font-bold text-lg max-h-6"> <strong className='text-xl'>1$</strong> cada boleto</p>
                    <p className="text-black font-bold text-lg max-h-6">Compra mínima 2 </p>
                </div>
                <Button className="text-base mt-4" color="primary" radius="md" size="sm">
                    Participar
                </Button>
            </CardFooter>
        </Card>
    )
}
