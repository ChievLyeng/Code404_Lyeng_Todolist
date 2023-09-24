import { useState } from "react"

export const ModifyTodo = ({task,onSubmit}) => {
    const [edit,setEdit] = useState(task.todo);
    const [close,setClose] = useState(true);


    const handleChange = (event) => {
        if (close){
            setEdit(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(task.id,edit);
    };

    const handleClose = () => {
        setClose(false)
        setEdit(task.todo);
    };

    return (
        <form className="modal-container" onSubmit={handleSubmit}>
            <div className="edit-confirm-box">
                <div className="confirm-content">
                    <div className="confirm-header">
                        <h5 className="confirm-title">Edit Task</h5>
                    </div>
                    <div className="edit-confirm-body">
                    <input className="edit-input" value={edit} onChange={handleChange}/>
                    </div>
                    <div className="confirm-footer">
                        <button className="confirm-button">
                            Save
                        </button>
                        <button className="confirm-button" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>

        </form>
    
    );
}