import React from 'react'
import { FaBugs } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { RiHomeOfficeLine } from "react-icons/ri";

const Error = () => {
    return (
        <div className='w-full h-screen min-h-[500px] text-red-500 bg-gray-300 flex gap-5 flex-col justify-center items-center'>
            <FaBugs size={34} />
            <h1 className='font-bold'>Oops! Something went wrong.</h1>
            <h6 className='w-[400px] font-light text-center'>We encountered an error while loading this page. Please try again later or contact support if the problem persists.</h6>
            <button className='text-blue-900' onClick={() => window.location.reload()}>
                <TbReload className='m-auto' /> Reload Page
            </button>
            <button className='text-teal-900' onClick={() => window.location.href = '/'}>
                <RiHomeOfficeLine className='m-auto' />Go to Home
            </button>
        </div>
    );
}

export default Error