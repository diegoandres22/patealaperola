
import React, { useEffect } from 'react'
import { Chip, Tooltip } from '@heroui/react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { fetchRateBcvData } from '@/store/services/rateBcvService'


export const RateBcv = () => {
    const dispatch = useDispatch<AppDispatch>();
  

    useEffect(() => {
        dispatch(fetchRateBcvData());
    }, [dispatch]);


    const rateBcv = useSelector((state: RootState) => state.RateBcv.price)
    return (
        <div className='w-full absolute flex justify-end '>
            <Tooltip content="Tasa Banco Central de Venezuela" showArrow={true} >
                <Chip radius='none'>Tasa Bcv : {rateBcv}  bs</Chip>
            </Tooltip>
        </div>
    )
}
