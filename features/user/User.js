import React, {useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, selectToken, selectRefreshToken } from './userSlice';

const getToken = (token) => {
    return axios.get("http://localhost:3000/api/staff/id", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return null;
    });
}

// function that will check for a token and refresh token from react-native-keychain
export const checkToken = () => {
    let token = useSelector(selectToken);
    const dispatch = useDispatch();
    
    return new Promise((resolve, reject) => {
        SecureStore.getItemAsync('token')
        .then(result => {
            if (result) {
                dispatch(setToken({ token }));
                //dispatch({type: 'user/setRefreshToken', payload: result.dandle_refresh_token});
                //setToken(result.dandle_token);
                //setRefreshToken(result.dandle_refresh_token);
                console.log("Token: " + result);
                resolve(result);
            } else {
                dispatch(setToken({token}));
                //dispatch({type: 'user/setRefreshToken', payload: null});
                //reject("No credentials found");
                console.log("No credentials found");
            }
        })
        .catch(err => {
            console.log(err);
            reject(err);
        });
    });
  }
/*
// function that will check for a token and refresh token from react-native-keychain
const checkToken = () => {
    return new Promise((resolve, reject) => {
        const keychain = require("react-native-keychain");
        keychain.getGenericPassword()
        .then(result => {
            if (result) {
                resolve(result);
            }
            resolve({
                token: result.dandle_staff_token,
                refreshToken: result.dandle_staff_refreshToken
            });
        })
        .catch(err => {
            reject(err);
        });
    });
}
*/

// function that will delete a token and refresh token from react-native-keychain
export const deleteToken = (navigation) => {
    // delete token in SecureStore
    SecureStore.deleteItemAsync('token')
    .then( result => {
        console.log("Token deleted");
        // navigate back to WelcomeScreen
        navigation.navigate('Welcome');

    })
    .catch(err => {
        console.log(err);
    });
}