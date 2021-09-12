import React from "react";
import { Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium } from "../styles/styles";

const logo_img = require("../assets/logo_silv.png");

const Welcome = () => {
  return (
    <StyledContainer>
      <StatusBar style="auto" />
      <InnerContainer>
        <AppLogo source = {logo_img}/>
        <Header1>Welcome to Dandle</Header1>
        <Header2>Swipe to see how it works</Header2>
        <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>
        <StlyedButton><Text>Continue</Text></StlyedButton>
        <Header3>I am an organization/company</Header3>
      </InnerContainer>
    </StyledContainer>
  );
}

export default Welcome;