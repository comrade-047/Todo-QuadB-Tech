import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/authSlice";

function Login(){

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(login)}>Login</button>
            <button onClick={()=>dispatch(logout)}>Logout</button>
        </div>
    );
}

export default Login;