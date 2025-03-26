import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";
import { useEffect, useState } from "react";
import { getWeather } from "../../apis/weatherApi";
import TodoList from "./TodoList";

function TodoListContainer() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const outdoorTasks = tasks.filter((task) => task.isOutdoor);
      for (const task of outdoorTasks) {
        if (task.city && !weatherData[task.id]) {
          const weather = await getWeather(task.city);
          if (weather) {
            setWeatherData((prev) => ({ ...prev, [task.id]: weather }));
          }
        }
      }
    }
    fetchWeather();
  }, [tasks]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return <TodoList tasks={tasks} weatherData={weatherData} onDeleteTask={handleDeleteTask} />;
}

export default TodoListContainer;
