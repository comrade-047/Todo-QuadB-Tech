import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/authSlice";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="flex justify-center space-x-4 mt-4 mb-4">
      {!isAuthenticated ? (
        <button 
          onClick={() => dispatch(login())} 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Login
        </button>
      ) : (
        <button 
          onClick={() => dispatch(logout())} 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;
