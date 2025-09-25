

export type TypeFilterList = {
    key: TypeFilter
    name: string
}

export type TypeTaskList = {
    id: string
    title: string
    description: string
    created_at: string
    completed: boolean
}

export type TypeFilter = 'all' | 'active' | 'completed'

export type TypeTaskStore = {
    tasks: TypeTaskList[]
    setTasks: (newTask: TypeTaskList) => void
    deleteTasks: (id: string) => void
    toggleCompleted: (id: string, value: boolean) => void
    changeTask: (id: string, newTask: TypeTaskList) => void
}

export type TypeFIlterStore = {
    filter: TypeFilter
    setFilter: (filter: TypeFilter) => void
}

