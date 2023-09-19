import {BiEdit} from 'react-icons/bi'; 
import {AiFillDelete} from 'react-icons/ai';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';

export const TodoDisplay = ({task,onDelete}) => {
    const [confirm,setConfirm] = useState(false);    

    return (
            <div className="task">
                <p>{task.todo}</p>
                <div>
                    <button className="todo-btn">
                        <BiEdit icon={BiEdit} size={30} />
                    </button>
                    <button className="todo-btn">
                        <AiFillDelete icon={AiFillDelete} size={30} onClick={() => (setConfirm(true))} />
                    </button>
                </div>

                {confirm && (
                    <DeleteModal onDelete={onDelete} />
                )}
            </div>
       
    );
}