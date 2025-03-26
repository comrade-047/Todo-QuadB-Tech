import Button from "../Button/Button";

function TodoList({ tasks, weatherData, onDeleteTask }) {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
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
              onClick={() => onDeleteTask(task.id)}
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
