import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";

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
      
      {/* Task Input */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task..."
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Select Priority */}
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

      {/* Add Task Button */}
      <button 
        onClick={handleAddTask} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Task
      </button>
    </div>
  );
}

export default Input;
