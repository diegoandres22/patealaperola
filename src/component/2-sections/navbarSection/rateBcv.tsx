"use client"

// Faltaba la directiva "use client" pese a usar hooks: funcionaba solo porque
// hasta ahora únicamente lo importaban componentes que ya eran de cliente. En
// cuanto un componente de servidor lo alcanzaba (vía el barrel de 2-sections),
// el build fallaba.
import React, { useEffect, useState } from 'react'
import { Spinner, Tooltip } from '@heroui/react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'


export const RateBcv = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const rateBcv = useSelector((state: RootState) => state.RateBcv.price)


    useEffect(() => {
        if (rateBcv) {
            setIsLoading(false);
        }
    }, [dispatch, rateBcv]);




    return (
        <div className='w-full absolute flex justify-end '>
            <Tooltip content="Tasa Banco Central de Venezuela" showArrow={true} >
                <div className='bg-foreground-300 w-auto h-auto items-center flex p-1 text-sm'>

                    Tasa Bcv :
                    {isLoading ? <Spinner variant="wave" className='mx-2' size='sm' />
                        : <div className='mx-1 font-bold text-base'>{rateBcv}</div>
                    }
                    
                    bs
                </div>
            </Tooltip>
        </div>
    )
}
