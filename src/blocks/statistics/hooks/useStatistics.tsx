import { useCallback, useState } from "react"
import { useListener } from "../../../utils/utils"
import type { TypeTaskList } from "../../../types/types"


export default function useStatistics() {

    
    const getCount = useCallback(() => {
        //INFO: Получение кол-ва активных задач

    }, [])

    const [count, setCount] = useState(() => getCount())

    useListener('satistic', () => {
        //INFO: Обновление данных
        setCount(getCount())
    })

    return {
        count
    }
}