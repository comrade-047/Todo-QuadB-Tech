import { Provider, useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input/Input";
import Login from "./components/Login/Login";
import TodoList from "./components/TodoList/TodoList";
import store from "./redux/store";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">To-Do List</h1>
        <Login />
        {isAuthenticated ? (
          <>
            <Input />
            <TodoList />
          </>
        ) : (
          <p className="mt-4 text-gray-600">
            Please login to manage your tasks.
          </p>
        )}
      </div>
    </Provider>
  );
}

export default App;
