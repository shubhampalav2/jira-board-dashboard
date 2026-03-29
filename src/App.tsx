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
  const [taskList, setTaskList] = useState<Array<taskItem>>([]);

  //created a method for deleting the task
  const deleteTask = (taskIndex: number) => {
    setTaskList(() => taskList.filter((_, idx: number) => idx !== taskIndex));
  }

  //fetching the data on page load
  function fetchTasks() {
    let data: string | null = localStorage.getItem('tasks');
    if (data) {
      //parsing the data
      const tasks = JSON.parse(data);
      console.log("Fetched tasks are ", tasks);
      setTaskList(tasks);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <div className="app">
      <header className='app-header'>
        <h1 className="main-heading">Jira Board</h1>
        <TaskForm setTaskList={setTaskList} />
      </header>
      <main className="app-main">
        {categories.map((status: statusType) => (
          <TaskColumn title={status.label} key={status.value} taskList={taskList} status={status.value} deleteTask={deleteTask} />
        ))}
      </main>
    </div>
  )
}

export default App
