import React from 'react';
import './css/statistics.css';
import useStatistics from './hooks/useStatistics';


const Statistics = () => {

    const { count } = useStatistics()

    return (
        <div>
            
        </div>
    );
};

export default Statistics;