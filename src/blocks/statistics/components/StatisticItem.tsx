import React from 'react';

const StatisticItem = ({all, tasks, title, color}: {all: number, tasks: number, title: string, color: string}) => {

    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progress = all > 0 ? tasks / all : 0;
    const offset = circumference - circumference * progress;
    
    return (
        <div className='statistic_item'>
            <div className="diagramma">
                <svg className='progress full' width={160} height={160}>
                    <circle r={70} cx={80} cy={80} ></circle>
                </svg>
                <svg className='progress' width={160} height={160}>
                    <circle r={70} cx={80} cy={80} style={{strokeDasharray: circumference, strokeDashoffset: offset, stroke: color}}></circle>
                </svg>
                <div className="procent">
                    {Math.round(progress * 100)}%
                </div>
            </div>
            <div className="description">
                <h2>{tasks}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default StatisticItem;