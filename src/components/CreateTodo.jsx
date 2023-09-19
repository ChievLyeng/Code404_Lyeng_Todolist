import { useState } from "react";

export const CreateTodo = ({onCreateTodo}) => {
    const [todo,setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
   
        event.preventDefault();

        if (todo){
            onCreateTodo(todo);
            setTodo('')
        }
        else(
            alert("No data")
        )

    }

    return (
        <div onSubmit={handleSubmit}>
            <form className="todo-form">
                <input className="todo-input" type="text" placeholder="What are your tasks ?"
                 value={todo} onChange={handleChange}
                  />
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}