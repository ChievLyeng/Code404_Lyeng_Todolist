import {BiEdit} from 'react-icons/bi'; 
import {AiFillDelete} from 'react-icons/ai';

export const TodoDisplay = ({task}) => {

    console.log(task);
    return (
            <div className="task">
                <p>{task.todo}</p>
                <div>
                    <button className="todo-btn">
                        <BiEdit icon={BiEdit} size={30} />
                    </button>
                    <button className="todo-btn">
                        <AiFillDelete icon={AiFillDelete} size={30} />
                    </button>
                </div>
            </div>
       
    );
}