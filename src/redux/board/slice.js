//src/redux/board/slice.js
import { createSlice } from "@reduxjs/toolkit";
import { addBoard, deleteBoard, fetchBoard } from "./operations";

const initialState = {
    items: [],
    error: null,
}
const boardSlice = createSlice({
    name: "board",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoard.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchBoard.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(addBoard.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteBoard.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (board) => board.id !== action.payload.id
                );
            })
            // .addCase(updateBoard.fulfilled, (state) => {
            // 
            // });        
    }
});



const boardReducer = boardSlice.reducer;

export default boardReducer;