export interface taskItem {
    task: string,
    status: string,
    tags: Array<string>
}

export interface styleType {
    [key: string]: {
        backgroundColor: string,
    }
}

export interface statusType {
    label: string,
    value: string
}

export interface taskColumn {
    title: string,
    taskList: Array<taskItem>,
    status: string,
    deleteTask: (idx: number) => void
}

export interface taskCard {
    task: string,
    tags: Array<string>,
    deleteTask: (idx: number) => void,
    id: number
}