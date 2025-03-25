import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import Button from "../Button/Button";  // Import Button Component

function Input() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Select');
  const dispatch = useDispatch();

  function handleAddTask() {
    if (!task.trim() || priority === "Select") {
      alert("Please enter a task and select a valid priority.");
      return;
    }
    dispatch(addTask({ id: Date.now(), name: task, priority }));
    setTask('');
    setPriority('Select');
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-md w-full max-w-md mx-auto">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="Select" disabled>Select priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <Button onClick={handleAddTask}>Add Task</Button>  {/* Using Button Component */}
    </div>
  );
}

export default Input;
