import { useState } from "react";

function Input(){

    const [task,setTask] = useState('');

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Add a task"
            />
            <button>Add</button>
        </div>
    );
}

export default Input;