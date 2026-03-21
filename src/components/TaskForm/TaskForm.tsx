import "./TaskForm.css";
import Tag from "../common/Tags/Tag";
export default function TaskForm() {
    return (
        <>
            <form /*onKeyDown={(e: any) => e.preventDefault()}*/ className="task-form">
                <input type="text" name="" id="" placeholder="Enter Task Detail" autoComplete="off"
                    className="task_input" />
                <div className="task_form_button">
                    <div className="tags">
                        <Tag name="DEV" />
                        <Tag name="QA" />
                        <Tag name="Product Owner" />
                    </div>
                    <div className="task_options">
                        <select className="task-status">
                            <option value="Todo">Todo</option>
                            <option value="InProgess">In Progress</option>
                            <option value="ProductReview">Product Review</option>
                            <option value="InQA">In QA</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button className="task-submit" value="submit">+Add</button>
                    </div>

                </div>

            </form>

        </>
    )
}