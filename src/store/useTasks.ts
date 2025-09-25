

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TypeTaskList, TypeTaskStore } from "../types/types";


export const useTasksStore = create<TypeTaskStore>()(
    //INFO: Список всех задач
    persist((set) => ({
        tasks: [],
        setTasks: (newTask) => set((state) => ({
            //INFO: Создание новой задачи
            tasks: [ ...state.tasks, newTask ]
        })),
        deleteTasks: (id: string) => set((state) => ({
            //INFO: Удаление задачи
            tasks: state.tasks.filter((task) => task.id !== id)
        })),
        toggleCompleted: (id: string, value: boolean) => set((state) => ({
            //INFO: Редактирование задачи
            tasks: state.tasks.map((task) => task.id === id ? { ...task, 'completed': value} : task)
        })),
        changeTask: (id: string, newTask: TypeTaskList) => set((state) => ({
            //INFO: Редактирование задачи
            tasks: state.tasks.map((task) => task.id === id ? newTask : task)
        }))
    }),
    { name: "task_list" })
)
