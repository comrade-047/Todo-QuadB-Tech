import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import backgroundImage from "./assets/react.jpg";
import TaskInputContainer from "./components/TaskInput/TaskInputContainer";
import TodoListContainer from "./components/TodoList/TodoListContainer";


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-lg flex flex-col justify-center items-center p-5 rounded-[30px] w-[500px] min-h-[250px]">
        <h1 className="text-4xl font-bold text-white mb-2  ">To-Do List</h1>
        <Login />
        {isAuthenticated ? (
          <>
            <TaskInputContainer />
            <TodoListContainer />
          </>
        ) : (
          <p className="mt-4 text-white text-xl ">
            Please login to manage your tasks.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;