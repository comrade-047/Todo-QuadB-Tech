import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";

function TodoList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md"
          >
            <span className="font-medium text-gray-800">
              {task.name} 
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
            </span>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
