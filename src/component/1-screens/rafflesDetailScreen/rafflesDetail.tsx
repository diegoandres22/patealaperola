"use client"
import React, { useEffect } from 'react'
import { RaffleDetailSection } from '@/component/2-sections/raffleDetailSection/raffleDetailSection'
import { useParams } from 'next/navigation'
import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { clearRaffleDetail, fetchRaffleById } from '@/store/slices/raffleDetailSlice'

export const RafflesDetailScreen = () => {
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams<{ id: string }>()
    const { raffleDetail, loading, error } = useSelector((state: RootState) => state.RaffleDetail);


    useEffect(() => {
        if (params.id) {
            dispatch(fetchRaffleById(params.id))
        }
        return () => {
            dispatch(clearRaffleDetail())
        }
    }, [dispatch, params.id]);

    return (
        <div className='w-full min-h-[74vh] pt-10 flex justify-center'>
            <RaffleDetailSection raffleDetail={raffleDetail} loading={loading} error={error} />
        </div>
    )
}
