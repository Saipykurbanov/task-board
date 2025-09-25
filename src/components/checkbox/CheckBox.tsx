import React, { useId } from 'react';
import './css/check_box.css';


const CheckBox = ({label, value, change}: {label: string, value: boolean, change: () => void}) => {

    const id = useId()

    return (
        <div className='main_checkbox'>
            <input 
                type="checkbox"
                name="" 
                id={`checkh_box_${id}`} 
                checked={value}
                onChange={change}
            />
            <label htmlFor={`checkh_box_${id}`}>{label}</label>
        </div>
    );
};

export default CheckBox;