import { useCallback, useEffect, useState } from "react"
import { useTasksStore } from "../../../store/useTasks"
import type { TypeStatisticCount } from "../../../types/types"


export default function useStatistics() {

    const tasks = useTasksStore(state => state.tasks)
    const [count, setCount] = useState<TypeStatisticCount>({
        active: 0,
        completed: 0,
        all: 0
    })
    
    const getCount = useCallback(() => {
        //INFO: Получение кол-ва активных задач
        const all = tasks?.length
        const active = tasks.filter(task => !task.completed)?.length
        const completed = all - active
        setCount(prev => ({
            ...prev, 
            active,
            completed,
            all
        }))
    }, [tasks])
    
    useEffect(() => {
        getCount()
    }, [tasks])

    return {
        count
    }
}