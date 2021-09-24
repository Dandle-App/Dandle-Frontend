import React from "react";
import { Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, LightContainer, FlexHoriztal,
        Pad_h_small, TextDark, TextLight,
        AppLogoRed
      } from "../styles/styles";

const logo_img = require("../assets/logo_silv.png");
const logo_img_red = require("../assets/logo_red.png")

const SignIn = ({navigation}) => {
  return (
    <LightContainer>
      <InnerContainer>
        <StatusBar style="dark" />
        <AppLogoRed source = {logo_img_red}/>
        <Pad_h_medium/>
        <Header1>Let's get you signed in</Header1>
        <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>
        <Pad_h_small />
        <FlexHoriztal>
            <StlyedButton 
              onPress={()=>navigation.navigate('UserSignIn')}
            >
              <TextLight>User</TextLight>
            </StlyedButton>
            <StlyedButton 
              onPress={()=>navigation.navigate('StaffSignIn')}
            >
              <TextLight>Staff</TextLight>
            </StlyedButton>
        </FlexHoriztal>
      </InnerContainer>
    </LightContainer>
  );
}

export default SignIn;