import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}
const boardSlice = createSlice({
    name: "board",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase("board/fetch/pending", (state) => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

const boardReducer = boardSlice.reducer;

export default boardReducer;