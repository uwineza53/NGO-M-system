import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";


const Loading = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <BiLoaderCircle size={30} className='animate-spin' />
        <p>wait ...</p>
    </div>
  )
}

export default Loading