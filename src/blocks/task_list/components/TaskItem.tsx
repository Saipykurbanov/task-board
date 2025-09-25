import React from 'react';
import type { TypeTaskList } from '../../../types/types';

const TaskItem = ({el, openModal, changeCheck}: {el: TypeTaskList, openModal: (el: TypeTaskList) => void, changeCheck: (id: string, value: boolean) => void}) => {
    
    return (
        <div className='grid' onClick={() => openModal(el)}>
            <div className="grid_item">
                <input 
                    onClick={(e: any) => e.stopPropagation()}
                    className='table_check_box'
                    type="checkbox" 
                    checked={el.completed}
                    onChange={() => changeCheck(el.id, !el.completed)}
                />
            </div>
            <div className="grid_item"><p>{el.title}</p></div>
            <div className="grid_item"><p>{el.description}</p></div>
            <div className="grid_item"><p>{new Date(el.created_at).toLocaleString()}</p></div>
        </div>
    );
};

export default TaskItem;