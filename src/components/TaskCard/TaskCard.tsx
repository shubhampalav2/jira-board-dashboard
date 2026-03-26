import Tag from "../common/Tags/Tag";
import deleteIcon from "../../assets/deleteIcon.webp";
import "./TaskCard.css";
export default function TaskCard() {
    return (<article className="task_card">
        <p className="task-text">This is a sample Task</p>
        <div className="task_card_bottom_line">
            <div className="task-card-tags">
                <Tag name="DEV" />
                <Tag name="QA" />
            </div>
            <div className="task-delete">
                <img src={deleteIcon} alt="delete icon" className="delete_icon" />
            </div>
        </div>

    </article>)
}