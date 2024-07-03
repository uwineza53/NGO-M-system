import React from 'react'
import { FaRegCircle } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { PiEmptyFill } from 'react-icons/pi';

const HistoryMinified = () => {
    return (
        <section className='max-h-[40%] p-3 md:p-4 focus:bg-neutral-800 hover:bg-neutral-800 overflow-auto group isolate rounded-sm' tabIndex={0}>
            <label className='sticky top-0 menu-title justify-between group-focus:bg-neutral-800 z-10'>
                History & work traces <HiDotsHorizontal className='group-focus:block hidden' title='open history' />
            </label>
            <div className='h-full min-h-[100px] w-full group-focus:flex flex-col px-2 hidden -z-10'>
                {false && <small className='m-auto'>
                    <PiEmptyFill className='text-issue mx-auto' />
                    <p className=''>Empty</p>
                </small>}
                <small className='relative w-full h-7 group/tooltip cursor-pointer'>
                    <nav className="absolute inset-0 flex gap-2 items-center justify-between">
                        <span className='flex gap-3 items-center'><FaRegCircle size={10} /> Action Name</span>
                        <span>now</span>
                    </nav>
                    <label className='tooltip delayed bg-red-400 caret-top-right top-[100%] left-[10%] w-[90%]'> details </label>
                </small>
                <small className='relative w-full h-7 group/tooltip cursor-pointer'>
                    <nav className="absolute inset-0 flex gap-2 items-center justify-between">
                        <span className='flex gap-3 items-center'><FaRegCircle size={10} /> Action Name</span>
                        <span>now</span>
                    </nav>
                    <label className='tooltip delayed bg-red-400 caret-top-right top-[100%] left-[10%] w-[90%]'> details </label>
                </small>
                <small className='relative w-full h-7 group/tooltip cursor-pointer'>
                    <nav className="absolute inset-0 flex gap-2 items-center justify-between">
                        <span className='flex gap-3 items-center'><FaRegCircle size={10} /> Action Name</span>
                        <span>now</span>
                    </nav>
                    <label className='tooltip delayed bg-red-400 caret-top-right top-[100%] left-[10%] w-[90%]'> details </label>
                </small>
                <small className='relative w-full h-7 group/tooltip cursor-pointer'>
                    <nav className="absolute inset-0 flex gap-2 items-center justify-between">
                        <span className='flex gap-3 items-center'><FaRegCircle size={10} /> Action Name</span>
                        <span>now</span>
                    </nav>
                    <label className='tooltip delayed bg-red-400 caret-top-right top-[100%] left-[10%] w-[90%]'> details </label>
                </small>
            </div>
            {/* <div className="relative w-full min-h-[100px] bg-black overflow-auto">
                {false && <small className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <PiEmptyFill className='text-issue m-auto' />
                    <p className=''>Empty</p>
                </small>}
                <small className='relative w-full h-7 group/tooltip'>
                    <nav className="absolute inset-0 flex gap-2 items-center justify-between">
                        <span className='flex gap-3 items-center'><FaRegCircle size={10} /> Action Name</span>
                        <span>now</span>
                    </nav>
                    <label className='tooltip bg-red-400 caret-top top-[100%] left-[90%]'> details </label>
                </small>
            </div> */}
        </section>
    );
}

export default HistoryMinified