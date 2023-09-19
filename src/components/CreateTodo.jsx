import { useState } from "react";

export const CreateTodo = ({onCreateTodo}) => {
    const [todo,setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = () => {
        if (todo) {
            event.preventDefault();
            onCreateTodo(todo);
            setTodo('')
        }
    }
}