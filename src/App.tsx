import TaskForm from './components/TaskForm/TaskForm';
import './App.css'

function App() {

  return (
    <div className="app">
      <header className='app-header'>
        <h1 className="main-heading">Jira Board</h1>
        <TaskForm />
      </header>
      <main className="app-main">
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
        <section>Section 4</section>

      </main>
    </div>
  )
}

export default App
