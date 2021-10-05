import React from "react";
import { Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small} from "../styles/styles";
import { TextLink } from "../components/atoms/Atoms";
import { StyldTextInput } from "../components/molecules/Molecules";
import { StyledFormArea } from "../components/organisms/Organisms";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import axios from "axios";

const logo_img = require("../assets/logo_red.png");

const StaffSignIn = ({navigation}) => {
  const handleSubmit = (values) => {
        
    console.log(values);
    const url = "http://localhost:3000/v1/staff/signin";
    axios.post(url, values)
    .then(res => {
        const response = res.data;
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
                    onSubmit={(values) => {
                        navigation.navigate("StaffSignUp");
                        handleSubmit(values);
                    }}
                >
                    {
                        ({handleChange, handleBlur, handleSubmit, values}) => (
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
                                    secureTextEntry={true}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                <Pad_h_medium /><Pad_h_medium /><Pad_h_medium />
                                <Pad_h_medium /><Pad_h_medium /><Pad_h_medium />
                                <StlyedButton onPress={handleSubmit} width='100%'>
                                    <TextLight>Sign in</TextLight>
                                </StlyedButton><Pad_h_small />
                                <FlexHoriztal justify='center'>
                                  <Header2>Don't have an account?</Header2>
                                  <TextLink onPress={handleSubmit}>
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