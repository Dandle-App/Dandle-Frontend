import Redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { checkToken } from '../features/user/User';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});