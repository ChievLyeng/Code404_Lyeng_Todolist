import { useState } from "react";

export const CreateTodo = ({onCreateTodo}) => {
    const [todo,setTodo] = useState('');
    const [data,setData] = useState(false);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleDataConfirm = () => {
        setData(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todo){
            onCreateTodo(todo);
            setTodo('')
        }
        else{
            setData(true);
        }

    }

    return (
    <>
        {/* check data */}
        { data && (
            <div className="modal-container">
                <div className="confirm-box">
                    <div className="confirm-header">
                        <div className="confirm-content">
                            <h5 className="confirm-title">Message Comfirmation</h5>
                        </div>
                        <div className="confirm-body">
                            <p>There no data for adding</p>
                        </div>
                        <div className="confirm-footer">
                            <button className="confirm-button" onClick={handleDataConfirm}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )}

        <div onSubmit={handleSubmit}>
            <form className="todo-form">
                <input className="todo-input" placeholder="Write your task here"
                value={todo} onChange={handleChange}
                />
                <button className="add-button">Add</button>
            </form>
        </div>

    </>
    );
}