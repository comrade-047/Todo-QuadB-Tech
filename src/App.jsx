import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css'
import { logout } from './redux/authSlice';
import Input from './components/Input/Input'
import Login from './components/Login/Login';
import TodoList from './components/TodoList/TodoList';
import store from './redux/store';

function App() {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return(
    <Provider store={store}>
      <div>
        <h1>Advanced To-Do App</h1>
        {isAuthenticated?(
          <Login/>
        ):(
          <>
            <button onClick={()=>dispatch(logout())}>Logout</button>
            <Input/>
            <TodoList/>
          </>
        )}
      </div>
    </Provider>
  )
}

export default App;
