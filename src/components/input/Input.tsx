import React, { useId } from 'react';
import './css/main_input.css';


const Input = ({label, placeholder, value, change, mode=''}: {label: string, placeholder: string, value: string, change: (e: any) => void, mode?: string}) => {

    const id = useId()

    return (
        <div className={`main_input ${mode}`}>
            <label htmlFor={`input_${id}`}>{label}</label>
            <input 
                type="text" 
                id={`input${id}`}
                placeholder={placeholder}
                value={value}
                onChange={change}
            />
        </div>
    );
};

export default Input;