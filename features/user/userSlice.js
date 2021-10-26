import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',

    initialState: {
        name: '',
        token: null,
        refreshToken: null,
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
        clearState: (state) => {
            state.staff_name = '';
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

// selectors
export const selectName = state => state.user.name;
export const selectToken = state => state.user.token;
export const selectRefreshToken = state => state.user.refreshToken;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;


console.log(userSlice.reducer);