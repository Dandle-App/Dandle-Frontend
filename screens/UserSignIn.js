import React from "react";
import { Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        LightContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium,AppLogoRed } from "../styles/styles";

const logo_img = require("../assets/logo_red.png");

const UserSignIn = () => {
  return (
    <LightContainer>
        <StatusBar style='dark'/>
        <InnerContainer>
            <AppLogoRed source={logo_img}/>
            <Header3>Find and scan the barcode in your room</Header3>
        </InnerContainer>
    </LightContainer>
  );
}

export default UserSignIn;