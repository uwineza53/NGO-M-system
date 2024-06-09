import React from 'react'
import { ChoiceBox, FieldList, SelectField, TextArea, TextInput } from '../components/Input';

const Login = ({ props }) => {
    const arr = [
        { label: 'one' },
        { value: '2', label: 'two' },
        { value: '3', label: 'three' }
    ];
    const p = "^[a-zA-Z0-9 \n@#!_$^&*,.;'\":`~()?/-]+$";
    return (
        <div className='flex flex-col gap-5'>
            <input type="text" />
            <TextInput type="date" label="username" placeholder="Your username" pattern={p} error="Only 5 numeric digits required" required="true" dataList={arr} listName="list" />
            <ChoiceBox type="checkbox" label="username" placeholder="Your username" pattern={p} error="Only 5 numeric digits required" required="true" dataList={arr} name="list" />
        </div>
    );
}

export default Login