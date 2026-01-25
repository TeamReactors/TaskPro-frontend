// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer)
    },
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Middleware configuration for the store. This configuration
 * ignores the given actions when performing serializable checks.
 * The ignored actions are:
 * - FLUSH
 * - REHYDRATE
 * - PAUSE
 * - PERSIST
 * - PURGE
 * - REGISTER
 */
/*******  cacb2d99-aa54-4c69-984f-7d1ab550d0b5  *******/
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);