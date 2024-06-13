import React from 'react'
import { FaBugs } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { RiHomeOfficeLine } from "react-icons/ri";

const Error = () => {
    return (
        <div className='w-full min-h-[700px] flex flex-col justify-center items-center gap-5'>
            <FaBugs size={40} color='red' />
            <div className="text-center">
                <h1 className='text-2xl font-bold'>Oops! Something went wrong.</h1>
                <p className='max-w-[500px] text-md font-thin'>We encountered an error while loading this page. Please try again later or contact support if the problem persists.</p>
            </div>
            <button className='text-secondary-500' onClick={() => window.location.reload()}>
                <TbReload className='m-auto' /> Reload Page
            </button>
            <button className='text-primary-500' onClick={() => window.location.href = '/'}>
                <RiHomeOfficeLine className='m-auto' />Go to Home
            </button>
        </div>
    );
}

export default Error