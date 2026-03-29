import { useState } from "react";
import "./TaskForm.css";
import Tag from "../common/Tags/Tag";
import type { taskItem } from "../../todoInterfaces";
import toast from "react-hot-toast";
export default function TaskForm({ setTaskList }: {
    setTaskList: React.Dispatch<React.SetStateAction<taskItem[]>>
}) {

    //created a state variable for storing form data
    const [formData, setFormData] = useState<taskItem>({
        task: "",
        status: "Todo",
        tags: []
    });

    const changeHandler = (e: any) => {
        //destructing
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    }


    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!formData.task) {
            toast.error("Please enter the task title");
            return;
        }
        if (formData.tags.length === 0) {
            toast.error("Please select at least tag");
            return;
        }
        //appending current task in a list
        setTaskList((prev) => {
            const tasks = [...prev, formData];
            //storing the data in local storage
            localStorage.setItem("tasks", JSON.stringify(tasks));
            return tasks
        });

        //reseting the form to initial state
        setFormData({
            task: "",
            status: "Todo",
            tags: []
        });
    }

    const tagHandler = (e: any) => {
        if (e.target?.nodeName?.toLowerCase() === 'button') {
            const tagName: string = e.target.innerText ?? "";

            setFormData((prev) => {
                const tagsList = prev.tags.includes(tagName)
                    ? prev.tags.filter((tag: string) => tag !== tagName)
                    : [...prev.tags, tagName];
                return { ...prev, tags: tagsList };
            });
        }
    }

    return (
        <>
            <form className="task-form" onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => { e.preventDefault() }}>
                <input type="text" name="task" id="" placeholder="Enter Task Detail" autoComplete="off"
                    className="task_input" value={formData.task} onChange={changeHandler} />
                <div className="task_form_button">
                    <div className="tags" onClick={tagHandler}>
                        <Tag name="DEV" isTag={formData.tags.includes("DEV")} />
                        <Tag name="QA" isTag={formData.tags.includes("QA")} />
                        <Tag name="Product Owner" isTag={formData.tags.includes("Product Owner")} />
                    </div>
                    <div className="task_options">
                        <select className="task-status" name="status" onChange={changeHandler} value={formData.status}>
                            <option value="Todo">Todo</option>
                            <option value="InProgress">In Progress</option>
                            <option value="ProductReview">Product Review</option>
                            <option value="InQA">In QA</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button className="task-submit" value="submit" onClick={submitHandler}>+Add</button>
                    </div>

                </div>

            </form>

        </>
    )
}
