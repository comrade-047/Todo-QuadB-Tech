import { createSlice } from '@reduxjs/toolkit';

const priorityRank = { High: 1, Medium: 2, Low: 3 };

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const sortTasks = (tasks) => {
    return tasks.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = sortTasks(action.payload);
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.tasks = sortTasks(state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            state.tasks = sortTasks(state.tasks);
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setTasks, addTask, deleteTask, setError, setLoading } = taskSlice.actions;
export default taskSlice.reducer;
