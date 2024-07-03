import React from 'react'
import { FormButton, TextInput } from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ props }) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-full h-screen p-5">
            <section className='flex flex-col gap-10 w-full sm:w-[80%] md:w-[65%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] items-center m-auto'>
                <nav>
                    <p className='font-bold text-3xl'>LOGIN</p>
                    <p className='font-thin'>
                        Your required to authenticate yourself before accessing this system, If you don't have access yet claim the authorization to the system admin.
                    </p>
                </nav>
                <TextInput type="text" label="Username" placeholder="Your username" error="Required is an email!" />
                <section className='w-full'>
                    <TextInput type="password" label="Password" placeholder="Your password" error="Required is password!" />
                    <p className='py-3 text-md'>Have you forgot your password? <Link to='/reset' className='text-primary hover:text-secondary'>Request reset link.</Link></p>
                </section>

                <FormButton text='Login' event={() => navigate('/dashboard')} />
            </section>
        </div>
    );
}

export default Login