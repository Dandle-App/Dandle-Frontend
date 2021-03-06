import React from "react";
import { View,Text } from "react-native";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import { Formik, Form } from "formik";
import { StatusBar } from 'expo-status-bar';
import { LightContainer, InnerContainer, PadlessContainer,
        Header1, Header2, TextLight, 
        AppLogoRed, StlyedButton,
        Pad_h_medium, FlexHoriztal, Pad_h_small} from "../styles/styles";

import { StyldTextInput } from "../components/molecules/Molecules";
import { StyledFormArea } from "../components/organisms/Organisms";
import axios from "axios";

const logo_img = require("../assets/logo_red.png");

const StaffSignUp = ({navigation}) => {
    [message, setMessage] = React.useState("");
    [messageStatus, setMessageStatus] = React.useState("");
    [hidePassword, setHidePassword] = React.useState(true);
    [hideConfirmPassword, setHideConfirmPassword] = React.useState(true);

    const handleSubmit = (values) => {
        
        console.log(values);
        const url = "https://dandle.dustinc.dev/signup/staff";
        axios.post(url, values)
        .then(res => {
            const response = res.data;
            const {message, status} = response;
            console.log(response);
            if(status === "200"){
                setMessageStatus(status);
                setMessage("sign in successful");
                () => navigation.navigate("Welcome");
            }
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
                    <Formik
                        initialValues={{
                            fullName: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            phone: "",
                            orgCode: ""
                        }}
                        onSubmit={(values) => {
                            {handleSubmit(values)};
                        }}
                    >
                        {
                            ({handleChange, handleBlur, handleSubmit, values}) => (
                                <StyledFormArea >
                                    <StyldTextInput
                                        label="full name"
                                        placeholder="John Doe"
                                        onChangeText={handleChange("fullName")}
                                        value={values.fullName}
                                    />
                                    <StyldTextInput
                                        label="email"
                                        placeholder="johndoe@acme.com"
                                        keyboardType="email-address"
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                    />
                                    <StyldTextInput
                                        label="password"
                                        placeholder="* * * * * * *"
                                        secureTextEntry={hidePassword}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <StyldTextInput
                                        label="confirm password"
                                        placeholder="* * * * * * *"
                                        secureTextEntry={hideConfirmPassword}
                                        onChangeText={handleChange('confirmPassword')}
                                        isPassword={true}
                                        hidePassword={hideConfirmPassword}
                                        setHidePassword={setHideConfirmPassword}
                                    />
                                    <StyldTextInput
                                        label="company/org code"
                                        placeholder="ACME101"
                                        autoCapitalize="characters"
                                        onChangeText={handleChange('orgCode')}
                                    />
                                    <StyldTextInput
                                        label="phone no."
                                        placeholder="303 309 9200"
                                        onChangeText={handleChange('phone')}
                                    />
                                    <StlyedButton
                                        onPress={handleSubmit}
                                    >
                                        <TextLight>sign up</TextLight>
                                    </StlyedButton>
                                    
                                </StyledFormArea>
                            )
                        }
                    </Formik>    
                </PadlessContainer>
            </LightContainer>
        </KeyboardAvoidingWrapper>
    );
}

export default StaffSignUp;