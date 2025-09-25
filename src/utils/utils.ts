
const listener: any = {}

export const useListener = (name: string, func: (data: any) => void) => {
    //INFO: Слушатель
    return listener[name]=func
}

export const setListener = (name: string, data: any) => {
    //INFO: Обработчик
    if(name) {
        return listener[name](data)
    } else {
        return
    }
}