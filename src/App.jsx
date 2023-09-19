import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import { TodoDisplay } from './components/TodoDisplay';
import './App.css'

function App() {
  const [tasks,setTasks] = useState([]);
  
  const createTodo = (todo) => {
    const AddedTodo = [...tasks,
    {
      id : Math.round(Math.random() * 99999), todo
    }];
      setTasks(AddedTodo);
  }

  const deleteTask = (id) => {
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    
    setTasks(deletedTask);

  };

  return (
    <>
    <div className='container-all'>
      <h1>To Do App</h1>
      <div className='todo-container'>

      
      <CreateTodo onCreateTodo={createTodo} />
        {tasks.map((task) => {
          return <TodoDisplay  key={task.id} task={task} onDelete={deleteTask} />
        })}
    </div>
    </div>
      
    </>
  )
}

export default App
