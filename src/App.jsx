import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
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


  return (
    <>
      <CreateTodo onCreateTodo={createTodo} />
    </>
  )
}

export default App
