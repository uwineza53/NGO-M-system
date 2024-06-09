import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";


export const TextInput = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);
    const [type, setType] = useState(props?.type);

    return (
        <section className="relative input-field w-1/4">
            <div className="relative">
                <input className="input" pattern={ props?.pattern } required focused={focused} onBlur={() =>setFocused("true")} type={ type } id={ props?.name } name={ props?.name } placeholder={ props?.placeholder } />
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    {props?.type === 'password' && (type === 'text' ? <FaEye size={18} color="black" onClick={() => setType('password')} /> : <ImEyeBlocked size={18} color="black" onClick={() => setType('text')} />)}
                    <IoInformationCircleOutline size={18} className="info" onClick={() => setOpenError(!openError)} />
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
                <input className="input" list={ props.listName } pattern={props?.pattern} required focused={focused} onBlur={() => setFocused("true")} type={props?.type} id={props?.name} name={props?.name} placeholder={props?.placeholder} />
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    <IoInformationCircleOutline size={19} className="info" onClick={() => setOpenError(!openError)} />
                </div>
            </div>
            <datalist id={props.listName}>
                {props?.dataList?.map((item) => (<option key={ item.value || item.label } value={ item.value || item.label }>{ item.label }</option>))}
            </datalist>
            {openError && <p className="message">{ props?.error }</p>}
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

export const SelectField = (props) => {
    const [focused, setFocused] = useState("false");

    return (
        <section className="relative input-field w-1/4">
            <div className="relative">
                <select className="input" pattern={props?.pattern} required focused={focused} onBlur={() => setFocused("true")} type={props?.type} id={props?.name} name={props?.name}>
                    {props?.dataList?.map((item) => (<option key={ item.value || item.label } value={ item.value || item.label }>{ item.label }</option>))}
                </select>
                <label htmlFor="text">{ props?.label }</label>
            </div>
        </section>
    );

    /* 
        TODO: Usage

        const arr = [
            { label: 'one' },
            { value: '2', label: 'two' },
            { value: '3', label: 'three' }
        ];

        <FieldList label="List of numbers" pattern="[0-9]{1,5}" error="Only 5 numeric digits required" required="true" dataList={arr} />
    */
}

export const TextArea = (props) => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);

    return (
        <section className="relative input-field w-1/4">
            <div className="relative">
                <textarea rows={5} className="input" pattern={props?.pattern} required focused={focused} onBlur={() => setFocused("true")} type={props?.type} id={props?.name} name={props?.name} placeholder={props?.placeholder} autoComplete='off'></textarea>
                <label htmlFor="text">{ props?.label }</label>
                <div className="icons">
                    <IoInformationCircleOutline size={19} className="info" onClick={() => setOpenError(!openError)} />
                </div>
            </div>
            {openError && <p className="message">{ props?.error }</p>}
        </section>
    );
}

export const ChoiceBox = (props) => {
    return (
        <div className="choiceBox w-1/4">
            <label className="font-bold text-md">{ props.label }</label>
            {props?.dataList?.map((item) => (
                <span className="flex items-center gap-2 px-2"><input name={props.name} key={item.value} type={props.type} /> { item.label }</span>
            ))}
        </div>
    );
}