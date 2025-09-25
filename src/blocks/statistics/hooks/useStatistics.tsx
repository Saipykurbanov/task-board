import { useCallback, useEffect, useState } from "react"
import { useTasksStore } from "../../../store/useTasks"


export default function useStatistics() {

    const tasks = useTasksStore(state => state.tasks)
    const [count, setCount] = useState({
        active: 0,
        completed: 0
    })
    
    const getCount = useCallback(() => {
        //INFO: Получение кол-ва активных задач
        const active = tasks.filter(task => !task.completed)?.length
        const completed = tasks?.length - active
        setCount(prev => ({
            ...prev, 
            active,
            completed
        }))
    }, [])

    console.log(count);
    
    
    useEffect(() => {
        getCount()
    }, [tasks])

    return {
        count
    }
}