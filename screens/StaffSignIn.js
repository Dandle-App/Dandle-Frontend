import React from "react";
import { Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        LightContainer, PadlessContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, 
        FlexHoriztal,
        Pad_h_small,
        Header1_2,
        TextLight} from "../styles/styles";
import { TextLink } from "../components/atoms/Atoms";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import { NavigationContainer } from "@react-navigation/native";

const logo_img = require("../assets/logo_red.png");

const StaffSignIn = ({navigation}) => {
  return (
    <KeyboardAvoidingWrapper>
      <LightContainer>
        <StatusBar style="dark" />
        <PadlessContainer>
          <AppLogo source = {logo_img}/>
          <Pad_h_medium/>
          <Header1>username</Header1>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>password</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>
          <Pad_h_medium/><Pad_h_small/><Pad_h_small/>
          <StlyedButton><TextLight>Sign in</TextLight></StlyedButton>
          <Pad_h_small/>
          <FlexHoriztal>
            <Header2>Don't have an account?</Header2>
            <TextLink onPress={()=>navigation.navigate("StaffSignUp")}>
              <Header2>Register</Header2>
            </TextLink>
          </FlexHoriztal>
        </PadlessContainer>
      </LightContainer>
    </KeyboardAvoidingWrapper>
  );
}

export default StaffSignIn;