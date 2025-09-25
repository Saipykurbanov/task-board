import React from 'react';
import type { TypeFilter, TypeFilterList } from '../../../types/types';

const FilterItem = ({el, callback, current}: {el: TypeFilterList, callback: (key: TypeFilter) => void, current: TypeFilter}) => {
    return (
        <div className={`filter_item ${current === el.key ? 'active' : ''}`} onClick={() => callback(el.key)}>
            {el.name}
        </div>
    );
};

export default FilterItem;