import React from 'react'
import { FormButton, TextInput } from '../components/Input';

const Reset = () => {
  return (
    <div className="flex flex-col w-full h-screen p-5">
        <section className='flex flex-col gap-10 w-full sm:w-[80%] md:w-[65%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] items-center m-auto'>
            <nav className='w-full'>
                <p className='font-bold text-2xl'>RESET PASSWORD</p>
                <p className='font-thin'>
                    Help yourself creating a new password for your account
                </p>
            </nav>
            <TextInput type="text" label="Email account" placeholder="Your email account" error="Required is an email!" />

            <FormButton  text='Request' />
        </section>
    </div>
  )
}

export default Reset