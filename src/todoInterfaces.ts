import type { DragEvent } from "react";

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
    deleteTask: (idx: number) => void,
    moveTask: (taskIndex: number, nextStatus: string) => void
}

export interface taskCard {
    task: string,
    tags: Array<string>,
    deleteTask: (idx: number) => void,
    id: number,
    handleDragStart: (event: DragEvent<HTMLElement>, taskIndex: number) => void,
    handleDragEnd: () => void
}
