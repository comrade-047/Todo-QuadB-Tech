import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";

function TodoList(){

    const tasks = useSelector((state)=>state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    {task.name}-{task.priority}
                    <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
