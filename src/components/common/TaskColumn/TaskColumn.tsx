import icon from "../../../assets/icons8-check-mark-48.png";
import type { taskItem } from "../../../todoInterfaces";
import TaskCard from "../../TaskCard/TaskCard";
import "./TaskColumn.css";
import type { taskColumn } from "../../../todoInterfaces";
export default function TaskColumn({ title, taskList, status, deleteTask }: taskColumn) {
    return (
        <>
            <section className="task-column">
                <h2 className="column-heading">
                    {title?.toUpperCase() === "COMPLETED" && <img src={icon} alt="completed icon" className="task_column_icon" />}
                    {title}</h2>
                {taskList.map((item: taskItem, idx: number) => (
                    item.status === status && <TaskCard key={idx} task={item.task} tags={item.tags} deleteTask={deleteTask} id={idx} />))}
            </section>
        </>
    )
}
