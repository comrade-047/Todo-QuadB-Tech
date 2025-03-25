import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

// Clear local storage & session storage on page reload
window.addEventListener("beforeunload", () => {
  localStorage.clear();
  sessionStorage.clear();
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export default store;
