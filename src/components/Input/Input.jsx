import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import Button from "../Button/Button"; // Import Button Component

function Input() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Select");
  const [isOutdoor,setIsOutdoor]  = useState(false);
  const [city,setCity] = useState("");

  const dispatch = useDispatch();

  function handleAddTask() {
    if (task.trim()) {
      if (isOutdoor && !city.trim()) {
        alert("Please enter a city name for outdoor tasks.");
        return;
      }

      dispatch(
        addTask({
          id: Date.now(),
          name: task,
          priority,
          isOutdoor,
          city: isOutdoor ? city : "", // Only store city if it's an outdoor task
        })
      );

      // Reset fields after adding task
      setTask("");
      setPriority("Medium");
      setIsOutdoor(false);
      setCity("");
    }
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

      {/**priority selection */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="Select" disabled>
          Select priority
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Outdoor Task Checkbox */}
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isOutdoor}
            onChange={(e) => setIsOutdoor(e.target.checked)}
            className="mr-2"
          />
          Outdoor Task?
        </label>
      </div>

      {/* City Input (Only for Outdoor Tasks) */}
      {isOutdoor && (
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="w-full p-2 mt-2 border rounded-md"
        />
      )}

      {/* Using Button Component */}
      <Button onClick={handleAddTask}>Add Task</Button>{" "}
      
    </div>
  );
}

export default Input;
