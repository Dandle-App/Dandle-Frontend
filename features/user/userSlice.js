import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',

    initialState: {
        name: '',
        token: '',
        refreshToken: '',
        isLoggedIn: false,
        isLoading: false,
        error: null
    },

    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        deleteToken: (state, action) => {
            state.token = '';
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        deleteRefreshToken: (state, action) => {
            state.refreshToken = '';
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clear: (state) => {
            state.name = '';
            state.token = '';
            state.refreshToken = '';
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = null;
        }

    },
});
export const { setName, setToken, deleteToken, setRefreshToken, deleteRefreshToken, setIsLoggedIn, setIsLoading, setError, clear } = userSlice.actions;
export default userSlice.reducer;

