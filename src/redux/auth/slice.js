import { createSlice } from '@reduxjs/toolkit';
import { login, logout, logoutOthers, refreshUser, register } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            id: null,
            name: null,
            email: null,
        },
        otherUsers: [],
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { id: null, name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            })
            .addCase(logoutOthers.fulfilled, (state) => {
                state.user = { id: null, name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;

            })
            .addCase(logoutOthers.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
})

const authReducer = authSlice.reducer;

export default authReducer;