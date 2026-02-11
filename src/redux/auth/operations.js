// auth operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://taskpro-backend-yofv.onrender.com/';
axios.defaults.withCredentials = true;
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data: res } = await axios.post('auth/register', credentials);
        const payload = res.data; // { user, accessToken }
        if (payload?.accessToken) setAuthHeader(payload.accessToken);
        return payload;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data: res } = await axios.post('auth/login', credentials);
            const payload = res.data; // { user, accessToken }
            if (payload?.accessToken) setAuthHeader(payload.accessToken);
            return payload;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('auth/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const logoutOthers = createAsyncThunk(
    'auth/logoutOthers',
    async (_, thunkAPI) => {
        try {
            await axios.post('auth/logout-others');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;

        if (token === null) {
            return thunkAPI.rejectWithValue({ status: 401, message: 'No token found' });
        }
        setAuthHeader(token);
        try {
            const { data: res } = await axios.post('auth/refresh');
            const payload = res.data; // { accessToken }
            if (payload?.accessToken) setAuthHeader(payload.accessToken);
            return payload;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);