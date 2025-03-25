import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/authSlice";
import Button from "../Button/Button";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex justify-center space-x-4 mt-4 mb-4">
      {!isAuthenticated ? (
        <Button
          onClick={() => dispatch(login())}
        > 
          Login
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(logout())}
          className="bg-gray-200 hover:bg-gray-400 backdrop-blur-lg"
        >
          Logout
        </Button>
      )}
    </div>
  );
}

export default Login;
