import React from 'react';
import './css/button.css';


const Button = ({children, callback, mode=''}: {children: string, callback: (e: any) => void, mode?: string}) => {
    return (
        <button className={`main_button ${mode}`} onClick={callback}>
            {children}
        </button>
    );
};

export default Button;