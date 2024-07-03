import React from 'react'
import { FormButton, TextArea, TextInput } from '../components/Input'
import { alphaNumeric } from '../utils/regex'

const GroupRegistration = () => {
  return (
    <form className='w-full py-5 sm:w-[500px] md:w-[600px]'>
        <section className='leading-none w-full pb-5'>
            <p className='title'>Group Registration</p>
            <small className='subtitle'>Group registration process requires you to fill all starred field!</small>
        </section>
        <TextInput name="group" type="text" pattern={alphaNumeric} label="Group name *" placeholder="Group name *" required />
        <TextArea name="group-desc" type="text" pattern={alphaNumeric} label="Group Description " placeholder="Group Description ... " />
        <FormButton text='Add Group' type='submit' className="place-self-center mt-12 h-[48px]" />
    </form>
  )
}

export default GroupRegistration