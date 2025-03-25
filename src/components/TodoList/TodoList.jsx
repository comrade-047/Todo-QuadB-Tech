import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { getWeather } from "../../apis/weatherApi";

function TodoList() {
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

  return (
    <div className="w-full max-w-md mx-auto mt-6 ">
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md bg-transparent"
          >
            <div>
              <span className="font-medium text-white">{task.name}</span>
              <span
                className={`ml-2 px-2 py-1 rounded-md 
                        ${
                          task.priority === "High"
                            ? "bg-red-500 text-white"
                            : task.priority === "Medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
              >
                {task.priority}
              </span>

              {/* Display Weather Info Inside Task */}
              {task.isOutdoor && weatherData[task.id] && (
                <span className="ml-2 text-black text-sm">
                  🌤 {weatherData[task.id].temperature}°C, {weatherData[task.id].condition}
                </span>
              )}
            </div>

            <Button
              onClick={() => dispatch(deleteTask(task.id))}
              className="hover:bg-red-500 hover:border-red-500 hover:text-white"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
