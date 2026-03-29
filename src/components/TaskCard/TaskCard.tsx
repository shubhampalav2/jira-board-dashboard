import Tag from "../common/Tags/Tag";
import deleteIcon from "../../assets/deleteIcon.webp";
import "./TaskCard.css";
import type { taskCard } from "../../todoInterfaces";
export default function TaskCard({ task, tags, deleteTask, id, handleDragStart, handleDragEnd }: taskCard) {
    return (<article className="task_card" draggable onDragStart={(event) => handleDragStart(event, id)} onDragEnd={handleDragEnd}>
        <p className="task-text">{task}</p>
        <div className="task_card_bottom_line">
            <div className="task-card-tags">
                {tags.map((tag: string) =>
                    <Tag key={tag} name={tag} isTag />)}
            </div>
            <div className="task-delete" onClick={() => deleteTask(id)}>
                <img src={deleteIcon} alt="delete icon" className="delete_icon" />
            </div>
        </div>

    </article>)
}
