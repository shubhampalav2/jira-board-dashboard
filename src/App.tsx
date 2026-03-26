import TaskForm from './components/TaskForm/TaskForm';
import './App.css'
import TaskColumn from './components/common/TaskColumn/TaskColumn';

function App() {
  const categories: Array<string> = ["Todo", "In Progress", "Product Review", "Testing", "Completed"];
  return (
    <div className="app">
      <header className='app-header'>
        <h1 className="main-heading">Jira Board</h1>
        <TaskForm />
      </header>
      <main className="app-main">
        {categories.map((title: string) => (
          <TaskColumn title={title} key={title} />
        ))}
      </main>
    </div>
  )
}

export default App
