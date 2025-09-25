import { useEffect, useRef, useState } from "react"
import { useListener } from "../../../utils/utils"
import type { TypeTaskList } from "../../../types/types"
import { useTasksStore } from "../../../store/useTasks"

export default function useDetail() {

    const { changeTask, deleteTasks } = useTasksStore()
    const [open, setOpen] = useState<boolean>(false)
    const [inputs, setInputs] = useState<TypeTaskList>({
        title: '',
        description: '',
        id: '',
        completed: false,
        created_at: ''
    })
    const formRef = useRef<HTMLDivElement | null>(null)

    const change = (e: any, field: string) => {
        //INFO: Ввод данных
        const value = e.target.value
        setInputs(prev => ({...prev, [field]: value}))
    }

    const checked = () => {
        //INFO: Смена чекбокса
        setInputs(prev => ({...prev, completed: !prev.completed}))
    }

    const save = () => {
        //INFO: Сохранение изменений
        changeTask(inputs.id, inputs)
        close()
    }

    const close = () => {
        //INFO: Закрытие окна

        setOpen(false)
        setInputs({
            title: '',
            description: '',
            id: '',
            completed: false,
            created_at: ''
        })
        document.body.classList.remove('modal')
    }

    const deleteTask = () => {
        //INFO: Удаление задачи

        deleteTasks(inputs.id)
        close()
    }

    useListener('detail_task_modal', (item: TypeTaskList) => {
        //INFO: Открытие модалки

        setInputs(item)
        document.body.classList.add('modal')
        setOpen(true)
    })

    useEffect(() => {

        window.addEventListener('mousedown', (e: any) => {
            if(!formRef.current?.contains(e.target)) {
                close()
            }
        })

        return () => window.removeEventListener('mousedown', close)

    }, [])

    return {
        open,
        inputs,
        formRef,
        save,
        close,
        change,
        checked,
        deleteTask,
    }
}