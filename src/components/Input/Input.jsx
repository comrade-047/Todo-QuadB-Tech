import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

function Input(){

    const [task,setTask] = useState('');
    
    const dispatch = useDispatch();

    function handleAddTask(){
        if(task.trim()){
            dispatch(addTask({id:Date.now(),name:task,priority:'Medium'}));
            setTask('');
        }
    }

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default Input;