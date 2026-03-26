import icon from "../../../assets/icons8-check-mark-48.png";
import TaskCard from "../../TaskCard/TaskCard";
import "./TaskColumn.css";
export default function TaskColumn({ title }: { title: string }) {
    return (
        <>
            <section className="task-column">
                <h2 className="column-heading">
                    {title?.toUpperCase() === "COMPLETED" && <img src={icon} alt="completed icon" className="task_column_icon" />}
                    {title}</h2>
                <TaskCard />
            </section>
        </>
    )
}
