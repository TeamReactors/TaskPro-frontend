// auth operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://taskpro-backend-yofv.onrender.com/';
axios.defaults.withCredentials = true;
export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// Axios interceptor
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const isRefreshEndpoint = originalRequest.url?.includes('auth/refresh') || 
                                   originalRequest.url === 'auth/refresh';
        
        if (error.response?.status === 401 && !originalRequest._retry && !isRefreshEndpoint) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axios(originalRequest);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const { data: res } = await axios.post('auth/refresh');
                const newAccessToken = res.data?.accessToken;

                if (newAccessToken) {
                    setAuthHeader(newAccessToken);
                    processQueue(null, newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axios(originalRequest);
                }
            } catch (refreshError) {
                processQueue(refreshError, null);
                clearAuthHeader();
                if (window.location.pathname !== '/auth/login') {
                    window.location.href = '/auth/login';
                }
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

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
        try {
            const { data: res } = await axios.post('auth/refresh');
            const payload = res.data; // { accessToken }
             setAuthHeader(payload.accessToken);
            return payload;
        } catch (error) {
            clearAuthHeader();
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    },
);