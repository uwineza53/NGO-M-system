import React, { useEffect, useRef, useState } from 'react'
import { ChoiceBox, FieldList, FormButton, SelectField, TextInput } from '../components/Input';
import { IDNumber, alphaNumeric, password, phoneNumber } from '../utils/regex';
import { fetching, handleCatch, handleResponse } from '../utils/useFetch';
import Toast from '../components/Toast';

const MemberRegistration = () => {
    const [notification, setNotification] = useState({
        visible: false,
        status: 200,
        text: ''
    });
    const [location, setLocation] = useState({
        province: [],
        district: [],
        sector: [],
        cell: [],
        village: []
    });
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        gender: ''
    });

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        fetching(`${process.env.REACT_APP_URI}/provinces`, { signal })
            .then(res => handleResponse(res, false, setNotification))
            .then(data => {
                if (!signal.aborted)
                    setLocation(prev => ({...prev, province: data}))
            })
            .catch(e => handleCatch(e));
        return () => controller.abort();
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        formData.province && fetching(`${process.env.REACT_APP_URI}/districts?province=${formData.province}`, { signal })
            .then(res => handleResponse(res, true, setNotification))
            .then((data) => {
                if (!signal.aborted)
                    setLocation(prev => ({ ...prev, district: data }))
            })
            .catch(err => handleCatch(err));
        return () => controller.abort();
    }, [formData.province]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        formData.district && fetching(`${process.env.REACT_APP_URI}/sectors?district=${formData.district}`, { signal })
            .then(res => handleResponse(res, false, setNotification))
            .then((data) => {
                if (!signal.aborted)
                    setLocation(prev => ({ ...prev, sector: data }))
            })
            .catch(err => handleCatch(err));
        return () => controller.abort();
    }, [formData.district]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        formData.sector && fetching(`${process.env.REACT_APP_URI}/cells?sector=${formData.sector}`, { signal })
            .then(res => handleResponse(res, false, setNotification))
            .then((data) => {
                if (!signal.aborted)
                    setLocation(prev => ({ ...prev, cell: data }))
            })
            .catch(err => handleCatch(err));
        return () => controller.abort();
    }, [formData.sector]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        formData.cell && fetching(`${process.env.REACT_APP_URI}/villages?cell=${formData.cell}`, { signal })
            .then(res => handleResponse(res, false, setNotification))
            .then(data => {

                setLocation(prev => ({ ...prev, village: data }))
            })
            .catch(err => handleCatch(err));
        return () => controller.abort();
    }, [formData.cell]);

    const gender = [
        { value: 0, label: 'Female' },
        { value: 1, label: 'Male' }
    ];

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form className='w-full py-5 sm:w-[500px] md:w-[600px]'>
            <section className='leading-none w-full pb-5'>
                <p className='title'>Member Registration</p>
                <small className='subtitle'>Member registration process requires you to fill all starred field!</small>
            </section>
            <section className='wrapped'>
                <TextInput type="text" pattern={alphaNumeric} label="Firstname *" placeholder="Your firstname *" required name='firstname' value={formData?.firstname} onChange={handleChange} />
                <TextInput type="text" pattern={alphaNumeric} label="Lastname *" placeholder="Your lastname *" />
            </section>

            <ChoiceBox name='gender' label="Gender *" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required type='radio' items={gender} />

            <TextInput type="text" pattern={IDNumber} label="ID Number *" placeholder="Your ID Number *" required />

            <TextInput type="text" pattern={phoneNumber} label="Telephone number *" placeholder="Your telephone contact *" />

            <SelectField label="Group / Itsinda" placeholder="Select group" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={gender} listName="list" />

            <section className='wrapped'>
                <SelectField label="Province" placeholder="Your province" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={location.province} listName="list"  name='province' value={formData.province} onChange={handleChange}/>
                <SelectField label="District" placeholder="Your district" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={location.district} listName="list" name='district' value={formData.district} onChange={handleChange} />
            </section>

            <section className='wrapped'>
                <SelectField label="Sector" placeholder="Your sector" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={location.sector} listName="list" name='sector' value={formData.sector} onChange={handleChange} />
                <SelectField label="Cell" placeholder="Your cell" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={location.cell} listName="list" name='cell' value={formData.cell} onChange={handleChange} />
                <SelectField label="Village" placeholder="Your village" pattern={alphaNumeric} error="Only 5 numeric digits required" required dataList={location.village} listName="list" name='village' value={formData.village} onChange={handleChange} />
            </section>

            <FormButton text='Register' type='submit' className="place-self-center mt-12 h-[48px]" />
            {notification.visible && <Toast status={notification.status} toggler={setNotification}>
                <div >
                    <h1 className='font-bold'>{notification.status === 200 ? "Registered!" : "Error occured!"}</h1>
                    <small className='font-thin'>{notification.text}</small>
                </div>
            </Toast>}
        </form>

    );
}

export default MemberRegistration