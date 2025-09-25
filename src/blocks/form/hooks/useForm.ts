import { useCallback, useEffect, useRef, useState } from "react"
import { useListener } from "../../../utils/utils"
import { useTasksStore } from "../../../store/useTasks"


export default function useForm() {

    const setTasks = useTasksStore(state => state?.setTasks)
    const [open, setOpen] = useState<boolean>(false)
    const [inputs, setInputs] = useState({
        title: '',
        description: ''
    })
    const formRef = useRef<HTMLDivElement | null>(null)

    const change = (e: any, field: string) => {
        //INFO: Ввод данных
        const value = e.target.value
        setInputs(prev => ({...prev, [field]: value}))
    }

    const save = useCallback(() => {
        //INFO: Сохранение задачи

        let newtask = {
            ...inputs, 
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            completed: false
        }

        setTasks(newtask)
        close()
        
    }, [inputs])

    const close = () => {
        //INFO: Закрытие окна
        
        setOpen(false)
        setInputs({
            title: '',
            description: ''
        })
        document.body.classList.remove('modal')
    }

    useListener('add_task_modal', (data: boolean) => {
        document.body.classList.add('modal')
        setOpen(data)
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
    }
}