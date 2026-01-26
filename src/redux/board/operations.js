//src/redux/board/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://taskpro-backend-yofv.onrender.com/";
export const fetchBoard = createAsyncThunk(
    "board/fetchBoard",
    async (_, thunkAPI) => {
        try {
            const { data: res } = await axios.get("board");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                status: error?.response?.status || null,
                message: error?.response?.data?.message
            });
        }
    }
);

export const addBoard = createAsyncThunk(
    "board/addBoard",
    async (boardSchema, thunkAPI) => {
        try {
            const { data: res } = await axios.post("board", boardSchema);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                status: error?.response?.status || null,
                message: error?.response?.data?.message 
            });
        }
    }
);

export const deleteBoard = createAsyncThunk(
    "board/deleteBoard",
    async (boardId, thunkAPI) => {
        try {
            const { data: res } = await axios.delete(`board/${boardId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                status: error?.response?.status || null,
                message: error?.response?.data?.message
            });
        }
    }
);  

// export const updateBoard = createAsyncThunk(
//     "board/updateBoard",
//     async ({ boardId, updatedBoard }, thunkAPI) => {
//         try {
//             const { data: res } = await axios.patch(
//                 `board/${boardId}`,
//                 updatedBoard
//             );
//             return res.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue({
//                 status: error?.response?.status || null,
//                 message: error?.response?.data?.message
//             });
//         }
//     }
// );  


