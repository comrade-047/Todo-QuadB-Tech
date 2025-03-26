import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import backgroundImage from "./assets/react.jpg";
import TaskInputContainer from "./components/TaskInput/TaskInputContainer";
import TodoListContainer from "./components/TodoList/TodoListContainer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.tasks.error);
  const navigate = useNavigate();

  // Redirect to error page when an error occurs
  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover" }}
          >
            <div className="backdrop-blur-lg flex flex-col justify-center items-center p-5 rounded-[30px] w-full max-w-lg min-h-[250px]">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">To-Do List</h1>
              <Login />
              {isAuthenticated ? (
                <>
                  <TaskInputContainer />
                  <TodoListContainer />
                </>
              ) : (
                <p className="mt-4 text-white text-lg md:text-xl">Please login to manage your tasks.</p>
              )}
            </div>
          </div>
        }
      />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
