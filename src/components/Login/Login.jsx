import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/authSlice";

function Login(){

    const dispatch = useDispatch();

    const handleLogin = ()=> {
        // console.log("logine");
        dispatch(login());
    }
    const handleLogout =()=>{
        dispatch(logout());
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Login;