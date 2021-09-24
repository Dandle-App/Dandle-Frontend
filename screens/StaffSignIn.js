import React from "react";
import { Text, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, 
        FlexHoriztal,
        Pad_h_small,
        Header1_2} from "../styles/styles";
import { TextLink } from "../components/atoms/Atoms";
import { NavigationContainer } from "@react-navigation/native";

const logo_img = require("../assets/logo_silv.png");

const StaffSignIn = ({navigation}) => {
  return (
    <StyledContainer>
      <StatusBar style="light" />
      <InnerContainer>
        <AppLogo source = {logo_img}/>
        <Pad_h_small/>
        <Header1_2>username</Header1_2>
        <TextInput style={{backgroundColor: "white", width:200, height:40}}/>
        <Header1_2>password</Header1_2>
        <TextInput style={{backgroundColor: "white", width:200, height:40}}/>
        <FlexHoriztal>
          <Header2>Don't have an account?</Header2>
          <TextLink onPress={()=>navigation.navigate("StaffSignUp")}>
            <Text>Register</Text>
          </TextLink>
        </FlexHoriztal>
        
      </InnerContainer>
    </StyledContainer>
  );
}

export default StaffSignIn;