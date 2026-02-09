import { createSlice } from "@reduxjs/toolkit";
// import { fetchTask, addTask, deleteTask, moveTask } from "./operations";
import { fetchColumns, addColumn, deleteColumn, updateColumn } from "./operations";

const initialState = {
    items: [],
}
const columnSlice = createSlice({
    name: "column",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchColumns.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addColumn.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteColumn.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (column) => column.id !== action.payload
                );
            })
            .addCase(updateColumn.fulfilled, (state, action) => {
                console.log(action.payload);
                const index = state.items.findIndex(
                    (column) => column.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    }
});

const columnReducer = columnSlice.reducer;

export default columnReducer;