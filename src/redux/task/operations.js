import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://taskpro-backend-yofv.onrender.com/";

export const fetchTask = createAsyncThunk(
    "tasks/fetchTasks",
    async (taskData, thunkAPI) => {
        try {
            const { data: res } = await axios.get(`tasks/${taskData.board_id}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (taskData, thunkAPI) => {
        try {
            const { data: res } = await axios.post(
                `tasks/${taskData.board_id}`,
                taskData,
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskData, thunkAPI) => {
        try {
            const { data: res } = await axios.delete(
                `tasks/${taskData.board_id}/${taskData.task_id}`,
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const moveTask = createAsyncThunk(
    "tasks/moveTask",
    async (taskData, thunkAPI) => {
        try {
            const { data: res } = await axios.patch(
                `tasks/${taskData.board_id}/${taskData.task_id}/move`,
                {
                    column_id: taskData.column_id,
                },
            );
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
