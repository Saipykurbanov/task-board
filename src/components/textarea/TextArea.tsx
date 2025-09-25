import React, { useId } from 'react';
import './css/textarea.css';


const TextArea = ({label, placeholder, value, change, mode=''}: {label: string, placeholder: string, value: string, change: (e: any) => void, mode?: string}) => {

    const id = useId()

    return (
        <div className={`main_textarea ${mode}`}>
            <label htmlFor={`textarea_${id}`}>{label}</label>
            <textarea 
                name="" 
                id={`textarea_${id}`}
                value={value}
                placeholder={placeholder}
                onChange={change}
            ></textarea>
        </div>
    );
};

export default TextArea;