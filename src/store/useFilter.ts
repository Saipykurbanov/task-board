import { create } from "zustand";
import type { TypeFIlterStore } from "../types/types";
import { persist } from "zustand/middleware";


export const useFilterStore = create<TypeFIlterStore>()(
    //INFO: Общее состояние фильтра
    persist((set) => ({
        filter: 'all',
        setFilter: (filter) => set({filter})
    }), {name: 'filter'})
)