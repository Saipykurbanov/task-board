import React from 'react';
import './css/filter.css';
import useFilters from './hooks/useFilters';
import FilterItem from './components/FilterItem';
import Button from '../../components/button/Button';

const Filters = () => {

    const hook = useFilters()

    return (
        <div className='filter'>
            <div className="filter_list">
                {hook.filtersList.map((el) => (
                    <FilterItem 
                        key={`filter_${el.key}`} 
                        callback={hook.switchFilter}
                        current={hook.filter}
                        el={el}
                    />
                ))}
            </div>
            <Button callback={hook.openModal}>Добавить</Button>
        </div>
    );
};

export default Filters;