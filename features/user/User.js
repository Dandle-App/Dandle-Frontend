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
const checkToken = () => {
    return new Promise((resolve, reject) => {
        const keychain = require("react-native-keychain");
        keychain.getGenericPassword()
        .then(result => {
            if (result) {
                dispatch({type: 'user/setToken', payload: result.dandle_token});
                dispatch({type: 'user/setRefreshToken', payload: result.dandle_refresh_token});
                //setToken(result.dandle_token);
                //setRefreshToken(result.dandle_refresh_token);
                //resolve(result);
            } else {
                dispatch({type: 'user/setToken', payload: null});
                dispatch({type: 'user/setRefreshToken', payload: null});
                //reject("No credentials found");
            }
        })
        .catch(err => {
            //reject(err);
            console.log(err);
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
const deleteToken = () => {
    return new Promise((resolve, reject) => {
        const keychain = require("react-native-keychain");
        keychain.deleteGenericPassword()
        .then(() => {
            resolve();
        })
        .catch(err => {
            reject(err);
        });
    });
}
