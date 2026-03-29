import { useState } from "react";
import type { DragEvent } from "react";
import icon from "../../../assets/icons8-check-mark-48.png";
import type { taskItem } from "../../../todoInterfaces";
import TaskCard from "../../TaskCard/TaskCard";
import "./TaskColumn.css";
import type { taskColumn } from "../../../todoInterfaces";
export default function TaskColumn({ title, taskList, status, deleteTask, moveTask }: taskColumn) {
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

    const handleDragStart = (event: DragEvent<HTMLElement>, taskIndex: number) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", String(taskIndex));
    };

    const handleDragOver = (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        setIsDraggedOver(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsDraggedOver(false);
        }
    };

    const handleDrop = (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        const taskIndex = Number(event.dataTransfer.getData("text/plain"));

        if (Number.isNaN(taskIndex)) {
            setIsDraggedOver(false);
            return;
        }

        moveTask(taskIndex, status);
        setIsDraggedOver(false);
    };

    const handleDragEnd = () => {
        setIsDraggedOver(false);
    };

    return (
        <>
            <section
                className={`task-column ${isDraggedOver ? "task-column--active" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <h2 className="column-heading">
                    {title?.toUpperCase() === "COMPLETED" && <img src={icon} alt="completed icon" className="task_column_icon" />}
                    {title}</h2>
                {taskList.map((item: taskItem, idx: number) => (
                    item.status === status && <TaskCard key={idx} task={item.task} tags={item.tags} deleteTask={deleteTask} id={idx} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />))}
            </section>
        </>
    )
}
