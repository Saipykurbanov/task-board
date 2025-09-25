import { useCallback, useState } from "react"
import type { TypeFilter, TypeFilterList } from "../../../types/types"
import { setListener } from "../../../utils/utils"
import { useFilterStore } from "../../../store/useFilter"


export default function useFilters() {

    const { filter, setFilter } = useFilterStore()
    const filtersList: TypeFilterList[] = [
        {key: 'all', name: 'Все'}, 
        {key: 'active', name: 'Активные'}, 
        {key: 'completed', name: 'Выполненные'}
    ]

    const switchFilter = useCallback((filter: TypeFilter) => {
        //INFO: Переключение фильтра
        setFilter(filter)
    }, [])

    const openModal = useCallback((e: any) => {
        //INFO: Открытие модального окна добавления задачи
        e.stopPropagation()
        setListener('add_task_modal', true)
    }, [])

    return {
        filter,
        filtersList,
        openModal,
        switchFilter,
    }
}