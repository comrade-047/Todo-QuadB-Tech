import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

function Input(){

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('Select')
    const dispatch = useDispatch();

    function handleAddTask() {
        if (!task.trim() || priority === "Select") {
            alert("Please enter a task and select a valid priority.");
            return;
        }

        dispatch(addTask({ id: Date.now(), name: task, priority }));
        setTask('');
        setPriority('Select'); // Reset after adding
    }

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Add a task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Select" disabled>Select order</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default Input;