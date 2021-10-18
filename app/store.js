import Redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
export const screenTitle = '';