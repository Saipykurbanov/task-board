import React from 'react';
import useTaskList from './hooks/useTaskList';
import Head from './components/Head';
import TaskItem from './components/TaskItem';
import './css/task_list.css';
import Loading from '../../components/loading/Loading';
import NoItems from './components/NoItems';


const TaskList = () => {

    const hook = useTaskList()

    return (
        <div className='task_list_wrapper'>
            <Head />

            {hook.load?<Loading />
            :hook.list?.length
            ?hook.list.map((el, i) => (
                <TaskItem el={el} key={`task_${i}`} openModal={hook.openDetail} changeCheck={hook.changeCheck}/>
            ))
            :<NoItems />}
        </div>
    );
};

export default TaskList;