import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";


export const TextInput = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);
    const [type, setType] = useState(props?.type);

    return (
        <section className="relative input-field w-full">
            <div className="relative">
                <input pattern={ props?.pattern } required focused={focused} onBlur={() =>setFocused("true")} type={ type } id={ props?.name } name={ props?.name } placeholder={ props?.placeholder } />
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    {props?.type === 'password' && (type === 'text' ? <ImEyeBlocked size={18} color="black" onClick={() => setType('password')} /> : <FaEye size={18} color="black" onClick={() => setType('text')} />)}
                    <IoInformationCircleOutline size={18} className="icon" onClick={() => setOpenError(true)} />
                </div>
            </div>
            {openError && <p className="message">{ props?.error }</p>}
        </section>
    );

    /* 
        TODO: Usage

        <TextInput label="username" placeholder="Your username" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" />
    */
}

export const FieldList = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);

    return (
        <section className="relative input-field w-1/4">
            <div className="relative">
                <input list={ props.listName } pattern={props?.pattern} required focused={focused} onBlur={() => setFocused("true")} type={props?.type} id={props?.name} name={props?.name} placeholder={props?.placeholder} />
                <label htmlFor="text">{ props?.label }</label>
                <IoInformationCircleOutline size={19} className="icon peer" onClick={() => setOpenError(true)} />
            </div>
            <datalist id={props.listName}>
                {props?.dataList?.map((item) => (<option key={ item.value || item.label } value={ item.value || item.label }>{ item.label }</option>))}
            </datalist>
            {openError && <p className="message peer-hover:inline">{ props?.error }</p>}
        </section>
    );

    /* 
        TODO: Usage

        const arr = [
            { label: 'one' },
            { value: '2', label: 'two' },
            { value: '3', label: 'three' }
        ];

        <FieldList label="username" placeholder="Your username" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" dataList={arr} listName="list" />
    */
}