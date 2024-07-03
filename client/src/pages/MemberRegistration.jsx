import React from 'react'
import { ChoiceBox, FieldList, FormButton, SelectField, TextInput } from '../components/Input';
import { IDNumber, alphaNumeric, password, phoneNumber } from '../utils/regex';

const MemberRegistration = () => {
    const arr = [
        { value: 0, label: 'Female' },
        { value: 1, label: 'Male' }
    ];

    const province = [
        { value: '', label: 'Select province' },
        { value: '1', label: 'Kicukiro' },
        { value: '2', label: 'Nyarugenge' }
    ];

    const district = [
        { value: '', label: 'Select district' },
        { value: '1', label: 'Kicukiro' },
        { value: '2', label: 'Nyarugenge' }
    ];

    const sector = [
        { value: '', label: 'Select sector' },
        { value: '1', label: 'Kicukiro' },
        { value: '2', label: 'Nyarugenge' }
    ];

    const cell = [
        { value: '', label: 'Select cell' },
        { value: '1', label: 'Kicukiro' },
        { value: '2', label: 'Nyarugenge' }
    ];

    const village = [
        { value: '', label: 'Select district' },
        { value: '1', label: 'Kicukiro' },
        { value: '2', label: 'Nyarugenge' }
    ];
    return (
        <form className='w-full py-5 sm:w-[500px] md:w-[600px]'>
            <section className='leading-none w-full pb-5'>
                <p className='title'>Member Registration</p>
                <small className='subtitle'>Member registration process requires you to fill all starred field!</small>
            </section>
            <section className='wrapped'>
                <TextInput type="text" pattern={alphaNumeric} label="Firstname *" placeholder="Your firstname *" required />
                <TextInput type="text" pattern={alphaNumeric} label="Lastname *" placeholder="Your lastname *" />
            </section>

            <ChoiceBox name='gender' label="Gender *" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" type='radio' items={arr} />

            <TextInput type="text" pattern={IDNumber} label="ID Number *" placeholder="Your ID Number *" />

            <TextInput type="text" pattern={phoneNumber} label="Telephone number *" placeholder="Your telephone contact *" />

            <SelectField label="Group / Itsinda" placeholder="Select group" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={arr} listName="list" />

            <section className='wrapped'>
                <SelectField label="Province" placeholder="Your province" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={province} listName="list" />
                <SelectField label="District" placeholder="Your district" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={district} listName="list" />
            </section>

            <section className='wrapped'>
                <SelectField label="Sector" placeholder="Your sector" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={sector} listName="list" />
                <SelectField label="Cell" placeholder="Your cell" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={cell} listName="list" />
                <SelectField label="Village" placeholder="Your village" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={village} listName="list" />
            </section>

            <FormButton text='Register' type='submit' className="place-self-center mt-12 h-[48px]" />
        </form>
    );
}

export default MemberRegistration