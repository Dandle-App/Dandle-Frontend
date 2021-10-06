import React from "react";
import { Text, TextInput, ActivityIndicator } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Formik, Form } from "formik";
import { 
        LightContainer, PadlessContainer, FlexHoriztal,
        Header1, Header2, Header3, TextLight,
        AppLogo, StlyedButton,
        Pad_h_medium, Pad_h_small, Pad_w_small} from "../styles/styles";
import { TextLink, MsgBox } from "../components/atoms/Atoms";
import { StyldTextInput } from "../components/molecules/Molecules";
import { StyledFormArea } from "../components/organisms/Organisms";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import axios from "axios";

const logo_img = require("../assets/logo_red.png");

const StaffSignIn = ({navigation}) => {
    [message, setMessage] = React.useState("");
    [messageStatus, setMessageStatus] = React.useState("failed");
    const handleSubmit = (values, setSubmitting) => {

        const url = "http://192.168.1.68:3000/signin/staff";
        axios.post(url, values)
        .then( (response) => {
            const result = response.data;
            const {success, user, token} = response.data;
            if(success === true) {
                setMessageStatus("success");
                setMessage("sign in successful");
                navigation.navigate("Welcome");
            }
            else if (success === false) {
                setMessageStatus("failed");
                setMessage("sign in failed");
            }
            setSubmitting(false);
        })
        .catch(err => {
            setSubmitting(false);
            //setMessage("Oops! Network error. Try again soon");
            if (err.response.status === 401) {
                setMessage("Invalid username or password");
            }
            else {
                setMessage("Oops! Network error. Try again soon");
            }
        })
        .finally(() => {
            setSubmitting(false);
            console.log(message);
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
                                        secureTextEntry={true}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
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