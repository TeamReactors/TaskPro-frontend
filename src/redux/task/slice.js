import { createSlice } from "@reduxjs/toolkit";
import { fetchTask, addTask, deleteTask, moveTask } from "./operations";

const initialState = {
    items: [],
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTask.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (task) => task.id !== action.payload.id
                );
            })
            .addCase(moveTask.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    }
});

const taskReducer = taskSlice.reducer;

export default taskReducer;