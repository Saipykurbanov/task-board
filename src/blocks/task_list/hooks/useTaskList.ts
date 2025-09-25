import { useCallback, useEffect, useRef, useState } from "react"
import type { TypeTaskList } from "../../../types/types"
import { setListener } from "../../../utils/utils"
import { useTasksStore } from "../../../store/useTasks"
import { useFilterStore } from "../../../store/useFilter"


export default function useTaskList() {

    const { tasks, toggleCompleted } = useTasksStore()
    const filter = useFilterStore(state => state?.filter)
    const [list, setList] = useState<TypeTaskList[]>([])
    const [load, setLoad] = useState<boolean>(false)
    const timer = useRef<number| null>(null)

     const getList = useCallback(() => {
        //INFO: Получение списка (с фильтром)

        let filteredList: TypeTaskList[] = tasks

        switch(filter) {
            case "active":
                filteredList = filteredList.filter((item) => !item?.completed)
                break
            case "completed":
                filteredList = filteredList.filter((item) => item?.completed)
                break
            default:
                break
        }

        return filteredList.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    }, [filter, tasks])

    const openDetail = (el: TypeTaskList) => {
        //INFO: Открытие модалки
        setListener('detail_task_modal', el)
    }

    const changeCheck = useCallback((id: string, value: boolean) => {
        //INFO: Изменение статуса
        toggleCompleted(id, value)
    }, [])

    useEffect(() => {

        if(timer.current) clearTimeout(timer.current)
        setLoad(true)
        setList(getList())
        timer.current = setTimeout(() => setLoad(false), 300)
        
        return () => {
            if(timer.current) clearTimeout(timer.current)
        }
    }, [filter])

    useEffect(() => {
        setList(getList())
    }, [tasks])

    return {
        list,
        load,
        openDetail,
        changeCheck,
    }
}