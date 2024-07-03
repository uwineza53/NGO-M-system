import React from 'react'
import { FormButton, TextArea, TextInput } from '../components/Input'
import { alphaNumeric } from '../utils/regex'

const MethodRegistration = () => {
  return (
    <form className='w-full py-5 sm:w-[500px] md:w-[600px]'>
        <section className='leading-none w-full pb-5'>
            <p className='title'>Method Registration</p>
            <small className='subtitle'>Member registration process requires you to fill all starred field!</small>
        </section>
        <TextInput name="method" type="text" pattern={alphaNumeric} label="Method name *" placeholder="Method name *" required />
        <TextArea name="method-desc" type="text" pattern={alphaNumeric} label="Method Description " placeholder="Method Description ... " />
        <FormButton text='Add Method' type='submit' className="place-self-center mt-12 h-[48px]" />
    </form>
  )
}

export default MethodRegistration