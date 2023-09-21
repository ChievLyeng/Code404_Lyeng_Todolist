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

    }

    return (
        <div onSubmit={handleSubmit}>
            <form className="todo-form">
                <input className="todo-input" placeholder="Write your task here"
                 value={todo} onChange={handleChange}
                  />
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}