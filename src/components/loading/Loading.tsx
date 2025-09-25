import React from 'react';
import './css/loading.css';


const Loading = () => {
    return (
        <div className='loading'>
            <svg width={30} height={30}>
                <circle r={12} cx={15} cy={15}></circle>
            </svg>
        </div>
    );
};

export default Loading;