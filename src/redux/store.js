// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// Reducers
import authReducer from './auth/slice';
import boardReducer from './board/slice';
import columnReducer from './column/slice';
import taskReducer from './task/slice';

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
        auth: persistReducer(authPersistConfig, authReducer),
        board: boardReducer,
        column: columnReducer,
        tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);