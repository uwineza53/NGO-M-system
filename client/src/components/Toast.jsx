import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const Toast = ({toggler, children}) => {
  return (
    <div className='flex flex-row-reverse justify-between items-center gap-3 absolute top-2 right-2 bg-primary rounded-md px-2 py-1 w-[75%] sm:w-[300px] md:w-[400px] lg:w-[600px] transition-all duration-300 font-semibold'>
      <FaTimesCircle size={18} className='text-issue float-right sticky right-0 hover:text-issue hover:neon-red hover:bg-red-200 rounded-full cursor-pointer transition-all duration-700' onClick={() => toggler(false)} title='close' />
      {children}
    </div>
  )
}

export default Toast