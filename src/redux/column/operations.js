import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://taskpro-backend-yofv.onrender.com/";

export const fetchColumns = createAsyncThunk(
    "column/fetchColumns",
    async (boardId, thunkAPI) => {
        try {
            const { data: res } = await axios.get(`column/${boardId}`);
            return res.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addColumn = createAsyncThunk(
    "column/addColumn",
    async (columnData, thunkAPI) => {
        try {

            const { data: res } = await axios.post("column", columnData);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });


export const deleteColumn = createAsyncThunk(
    "column/deleteColumn",
    async (columnId, thunkAPI) => {
        try {

            await axios.delete(`column/${columnId}`);
            return Number(columnId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
export const updateColumn = createAsyncThunk(
    "column/updateColumn",
    async (columnData, thunkAPI) => {
        try {

            const { data: res } = await axios.patch(`column/${columnData.id}`, { title: columnData.title });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });