import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const ModalBox = ({ children, toggler }) => {
  return (
    toggler && <section className='bg-neutral-800/90 fixed flex items-center justify-center inset-0 h-screen w-full'>
        {/* <div className='relative h-full'> */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
            <article className='h-[300px] w-[500px] bg-inherit border-2 border-primary rounded-md overflow-auto relative'>
                <FaTimesCircle className='text-primary bg-inherit float-right sticky right-2 top-2 m-2 hover:text-issue hover:neon-red hover:bg-red-200 rounded-full cursor-pointer transition-all duration-700' onClick={() => toggler(false)} title='close' />
                {children}
            </article>
            {/* </div> */}
        {/* </div> */}
    </section>
  )
}

export default ModalBox