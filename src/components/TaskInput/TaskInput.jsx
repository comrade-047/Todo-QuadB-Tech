import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import Button from "../Button/Button"; // Import Button Component
import InputFeild from "../InputField/InputField";


function TaskInput() {
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
    <div className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-md w-full max-w-md mx-auto bg-transparent" >
      <InputFeild
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task ..."
      />

      {/**priority selection */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-white bg-white focus:outline-none  bg-transparent"
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
        <label className="inline-flex items-center text-white">
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
        <InputFeild
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        />
      )}

      {/* Using Button Component */}
      <Button
        onClick={handleAddTask}
        className="hover:bg-green-400 hover:border-green-400"
      >
        Add Task
      </Button>
      
    </div>
  );
}

export default TaskInput;
