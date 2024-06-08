import React from 'react'
import { FieldList, TextInput } from '../components/Input';

const Login = ({ props }) => {
    const arr = [
        { label: 'one' },
        { value: '2', label: 'two' },
        { value: '3', label: 'three' }
    ];
    return (
        <div>
            <input type="text" />
            <TextInput type="password" label="username" placeholder="Your username" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" dataList={arr} listName="list" />
        </div>
    );
}

export default Login