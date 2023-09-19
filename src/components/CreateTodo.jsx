import { useState } from "react";

export const CreateTodo = ({onCreateTodo}) => {
    const [todo,setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        if (todo) {
            event.preventDefault();
            onCreateTodo(todo);
            setTodo('')
        }
        alert(todo)
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="text" value={todo} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    );
}