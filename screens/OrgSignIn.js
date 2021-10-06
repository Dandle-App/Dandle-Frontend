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

const OrgSignIn = ({navigation}) => {

  [message, setMessage] = React.useState("");
  [messageStatus, setMessageStatus] = React.useState("");
  const handleSubmit = (values) => {
        
    console.log(values);
    const url = "http://localhost:3000//v1/orgs/signin";
    axios.post(url, values)
    .then(res => {
        const response = res.data;
        const {success, user} = response;

        if(success === true){
            setMessageStatus("sign in successful");
            setMessage(message);
            () => navigation.navigate("Welcome");
        }else{
            setMessageStatus("sign in failed");
            setMessage(message);
        }
    })
    .catch(err => {
      setMessage("Oops! Check network connection and try again");
      console.log(err);
      console.log(message)
    });
  //
}
  
  return (
    <KeyboardAvoidingWrapper>
      <LightContainer>
        <StatusBar style="dark" />
        <PadlessContainer>
          <AppLogo source = {logo_img}/>
          <Pad_h_medium/>
          <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={(values) => {
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

export default OrgSignIn;