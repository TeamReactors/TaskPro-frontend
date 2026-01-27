import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://taskpro-backend-yofv.onrender.com/";

export const fetchTask = createAsyncThunk(
    "tasks/fetchTasks",
    async (_, thunkAPI) => {
        try {
            const { data: res } = await axios.get("tasks");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (taskData, thunkAPI) => {
        try {
            const { data: res } = await axios.post("tasks", taskData);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskId, thunkAPI) => {
        try {
            const { data: res } = await axios.delete(`tasks/${taskId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const moveTask = createAsyncThunk(
    "tasks/moveTask",
    async ({ taskId, newStatus }, thunkAPI) => {
        try {
            const { data: res } = await axios.patch(`tasks/${taskId}`, {
                status: newStatus
            });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
