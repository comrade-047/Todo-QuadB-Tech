import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import TaskInput from "./TaskInput";

function TaskInputContainer() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Select");
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [city, setCity] = useState("");

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
          city: isOutdoor ? city : "",
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
    <TaskInput
      task={task}
      setTask={setTask}
      priority={priority}
      setPriority={setPriority}
      isOutdoor={isOutdoor}
      setIsOutdoor={setIsOutdoor}
      city={city}
      setCity={setCity}
      handleAddTask={handleAddTask}
    />
  );
}

export default TaskInputContainer;
