import React from 'react'
import { TbWorldSearch } from "react-icons/tb";
import { useParams } from 'react-router-dom';


const NotFound = () => {
    const path = useParams();

    return (
        <div className='w-full min-h-[700px] flex flex-col justify-center items-center gap-5'>
            <TbWorldSearch size={40} color='red' />
            <div className="text-center">
                <h1 className='text-2xl font-bold'>Page Not Found</h1>
                <p className='max-w-[500px] text-md font-thin'>The page " {path['*'].split('/')[(path['*'].split('/').length) - 1]} " you are trying to visit does not exist on this server, Please go back to previous page</p>
            </div>
        </div>
    );
}

export default NotFound