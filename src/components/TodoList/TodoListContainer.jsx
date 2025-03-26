import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask, setError, setLoading } from "../../redux/taskSlice";
import { useEffect, useState } from "react";
import { getWeather } from "../../apis/weatherApi";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";

function TodoListContainer() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (error) return; // Prevent fetching if there's an error

    async function fetchWeather() {
      dispatch(setLoading(true));

      try {
        for (const task of tasks) {
          if (task.isOutdoor && task.city && !weatherData[task.id]) {
            const weather = await getWeather(task.city);
            if (weather.error) {
              throw new Error(weather.error);
            }
            setWeatherData((prev) => ({ ...prev, [task.id]: weather }));
          }
        }
      } catch (error) {
        dispatch(setError(error.message)); // Store error in Redux
        navigate("/error"); // Redirect to Error Page

        //  Find the failing task and update only that one
        const failedTask = tasks.find((task) => task.isOutdoor && !weatherData[task.id]);
        if (failedTask) {
          dispatch(updateTask({ id: failedTask.id, updates: { isOutdoor: false } }));
        }
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchWeather();
  }, [tasks]);

  // ✅ Reset weather data when navigating home
  useEffect(() => {
    if (!error) {
      setWeatherData({});
    }
  }, [error]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return <TodoList tasks={tasks} weatherData={weatherData} onDeleteTask={handleDeleteTask} />;
}

export default TodoListContainer;
