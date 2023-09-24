import {BiEdit} from 'react-icons/bi'; 
import {AiFillDelete} from 'react-icons/ai';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { ModifyTodo } from './ModifyTodo';

export const TodoDisplay = ({task,onDelete,onEdit}) => {
    const [confirm,setConfirm] = useState(false);    
    const [showEdit,setShowEdit] = useState(false);

    const handleDelete = () => {
      setConfirm(true)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id,editedTask) => {
        setShowEdit(false);
        onEdit(id,editedTask);
    }

    let Todo = <p className='editTask'>{task.todo}</p>

    if (showEdit) {
        Todo = <ModifyTodo task={task} onSubmit={handleSubmit}  />
    }
    

    return (
            <div className="task">
                <p className='todo-display'>{Todo}</p>
                <div>
                    <button className="todo-btn">
                        <BiEdit className='edit-icon' icon={BiEdit} size={30} onClick={handleEditClick} />
                    </button>
                    <button className="todo-btn">
                        <AiFillDelete className='delete-icon' icon={AiFillDelete} size={30} onClick={handleDelete} />
                    </button>
                </div>

                {confirm && (
                    <DeleteModal onDelete={onDelete} task={task} confirm={setConfirm} />
                )}
            </div>
       
    );
}