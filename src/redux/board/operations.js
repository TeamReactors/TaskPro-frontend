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
                message: error?.message ? String(error.message) : String(error),
            });
        }
    }
);