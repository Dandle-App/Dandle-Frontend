import React from "react";
import { Text, TextInput, ActivityIndicator } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small} from "../styles/styles";
import { TextLink, MsgBox } from "../components/atoms/Atoms";
import { StyldTextInput } from "../components/molecules/Molecules";
import { StyledFormArea } from "../components/organisms/Organisms";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";

import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { setToken } from "../features/user/userSlice";
import {getToken} from "../features/user/User";

const logo_img = require("../assets/logo_red.png");
const chalk = require('chalk');

const StaffSignIn = ({navigation}) => {
    [message, setMessage] = React.useState("");
    [messageStatus, setMessageStatus] = React.useState("failed");
    [hidePassword, setHidePassword] = React.useState(true);
    const dispatch = useDispatch();

    const handleSubmit = (values, setSubmitting) => {

        const url = "https://dandle.dustinc.dev/signin/staff";
        axios.post(url, values)
        .then( (response) => {
            const result = response.data;
            const {success, user, token, refreshToken} = response.data;
            if(success === true) {
                setMessageStatus("success");
                setMessage("sign in successful");
                storeToken(token, refreshToken);
                //
                navigation.navigate("OrgHome");
            }
            else if (success === false) {
                setMessageStatus("failed");
                setMessage("sign in failed");
            }
            setSubmitting(false);
        })
        .catch(err => {
            setSubmitting(false);
            // setMessage("Oops! Network error. Try again soon");
            if (err.response.status === 401) {
                setMessage("Invalid username or password");
            }
            else {
                setMessage("Oops! Network error. Try again soon");
            }
        })
        .finally(() => {
            setSubmitting(false);
        });
    }
    /*
    // function that will store a token and refresh token in react-native-keychain
    const storeToken = (token, refreshToken) => {
        return new Promise((resolve, reject) => {

            const keychain = require("react-native-keychain");
            keychain.setGenericPassword("dandle_staff_token", token)
            .then(() => {
                dispatch(setToken({token}));

                keychain.setGenericPassword("dandle_staff_refreshToken", refreshToken)
                .then(() => {
                    dispatch(setRefreshToken({refreshToken}));
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
    */
    
    // function that will store a token and refresh token in react-native-keychain
    async function storeToken (token, refreshToken) {
        SecureStore.setItemAsync("token", token)
        .then(() => {
            SecureStore.setItemAsync("refreshToken", refreshToken)
            .then(() => {
                dispatch(setToken(token));
                dispatch(setToken(refreshToken));
                console.log("\x1b[32m successfully stored token and refresh-token\n");
                console.log("\x1b[0m token: ", token,'\n');
                console.log("refreshToken: ", refreshToken, '\n');
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    return (
        <KeyboardAvoidingWrapper>
            <LightContainer>
                <StatusBar style="dark" />
                <PadlessContainer>
                <Pad_h_medium /><Pad_h_medium />
                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            handleSubmit(values, setSubmitting);
                        }}
                    >
                        {
                            ({handleChange, handleBlur, handleSubmit, isSubmitting, values}) => (
                                <StyledFormArea justify='center'>
                                    <StyldTextInput
                                        label="Username"
                                        placeholder="johndoe"
                                        onChangeText={handleChange("username")}
                                        value={values.username}
                                    />
                                    <StyldTextInput
                                        label="Password"
                                        placeholder="* * * * * * *"
                                        secureTextEntry={hidePassword}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <Pad_h_medium /><Pad_h_medium /><Pad_h_medium />
                                    <Pad_h_medium /><Pad_h_medium /><Pad_h_medium />
                                    <MsgBox type={messageStatus}>{message}</MsgBox>
                                    {!isSubmitting && <StlyedButton onPress={handleSubmit} width='100%'>
                                        <TextLight>Sign in</TextLight>
                                    </StlyedButton>}<Pad_h_small />
                                    {isSubmitting && <StlyedButton width='100%' disabled={true}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </StlyedButton>}<Pad_h_small />
                                    
                                    <FlexHoriztal justify='center'>
                                    <Header2>Don't have an account?</Header2>
                                    <TextLink onPress={()=> navigation.navigate('StaffSignUp')}>
                                        <Header2>Register</Header2>
                                    </TextLink>
                                    </FlexHoriztal>
                                </StyledFormArea>
                            )
                        }
                    </Formik>    
                </PadlessContainer>
            </LightContainer>
        </KeyboardAvoidingWrapper>
    );
}

export default StaffSignIn;

/*
// function that will store a token and refresh token in react-native-keychain
const storeToken = (token, refreshToken) => {
    return new Promise((resolve, reject) => {
        console.log(refreshToken);
        const keychain = require("react-native-keychain");
        keychain.setGenericPassword("dandle_staff_token", token)
        .then(() => {
            dispatch(setToken({token}));

            keychain.setGenericPassword("dandle_staff_refreshToken", refreshToken)
            .then(() => {
                dispatch(setRefreshToken({refreshToken}));
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
*/