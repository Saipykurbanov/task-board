import React from 'react';
import './css/statistics.css';
import useStatistics from './hooks/useStatistics';
import StatisticItem from './components/StatisticItem';


const Statistics = () => {

    const { count } = useStatistics()

    return (
        <div className='statistic'>
            <StatisticItem all={count.all} tasks={count.active} color={'#00ff0b'} title={'Активных задач'}/>
            <StatisticItem all={count.all} tasks={count.completed} color={'#ea00ff'} title={'Выполненных задач'}/>
        </div>
    );
};

export default Statistics;