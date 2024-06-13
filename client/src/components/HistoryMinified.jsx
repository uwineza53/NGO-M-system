import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi';
import { PiEmptyFill } from 'react-icons/pi';

const HistoryMinified = () => {
    return (
        <section className='max-h-[40%] group' tabIndex={0}>
            <label className='menu-title justify-between'>
                ACTIVITY TRACE <HiDotsHorizontal className='group-focus:block hidden' />
            </label>
            <div className='min-h-[100px] w-full group-focus:flex hidden'>
                <small className='m-auto'>
                    <PiEmptyFill className='text-issue mx-auto' />
                    <p className=''>Empty</p>
                </small>
            </div>
        </section>
    );
}

export default HistoryMinified