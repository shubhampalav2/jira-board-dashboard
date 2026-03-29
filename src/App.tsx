import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import './App.css'
import TaskColumn from './components/common/TaskColumn/TaskColumn';
import type { taskItem } from './todoInterfaces';
import type { statusType } from './todoInterfaces';

function App() {
  const categories: Array<statusType> = [{
    label: "Todo",
    value: "Todo"
  },
  {
    label: "In Progress",
    value: "InProgress"
  },
  {
    label: "Product Review",
    value: "ProductReview"
  },
  {
    label: "Testing",
    value: "InQA"
  },
  {
    label: "Completed",
    value: "Completed"
  }];

  //created a state variable for storing tasks
  const [taskList, setTaskList] = useState<Array<taskItem>>(() => {
    const data: string | null = localStorage.getItem('tasks');

    if (!data) {
      return [];
    }

    try {
      return JSON.parse(data) as Array<taskItem>;
    } catch (error) {
      console.error("Unable to parse tasks from local storage", error);
      return [];
    }
  });

  //created a method for deleting the task
  const deleteTask = (taskIndex: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, idx: number) => idx !== taskIndex));
  }

  const moveTask = (taskIndex: number, nextStatus: string) => {
    setTaskList((prevTaskList) => prevTaskList.map((task: taskItem, idx: number) => {
      if (idx !== taskIndex || task.status === nextStatus) {
        return task;
      }

      return {
        ...task,
        status: nextStatus
      };
    }));
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList])

  return (
    <div className="app">
      <header className='app-header'>
        <h1 className="main-heading">Jira Board</h1>
        <TaskForm setTaskList={setTaskList} />
      </header>
      <main className="app-main">
        {categories.map((status: statusType) => (
          <TaskColumn title={status.label} key={status.value} taskList={taskList} status={status.value} deleteTask={deleteTask} moveTask={moveTask} />
        ))}
      </main>
    </div>
  )
}

export default App
