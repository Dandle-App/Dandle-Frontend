const checkToken = (token) => {
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

// function that will store a token and refresh token in react-native-keychain
const storeToken = (token, refreshToken) => {
    return new Promise((resolve, reject) => {
        const keychain = require("react-native-keychain");
        keychain.setGenericPassword("dandle_staff_token", token)
        .then(() => {
            keychain.setGenericPassword("dandle_staff_refreshToken", refreshToken)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
        })
        .catch(err => {
            reject(err);
        });
    });
}

// function that will retrieve a token and refresh token from react-native-keychain
const getToken = () => {
    return new Promise((resolve, reject) => {
        const keychain = require("react-native-keychain");
        keychain.getGenericPassword()
        .then(credentials => {
            resolve({
                token: credentials.dandle_staff_token,
                refreshToken: credentials.dandle_staff_refreshToken
            });
        })
        .catch(err => {
            reject(err);
        });
    });
}

// write a function that will delete a token and refresh token from react-native-keychain
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
