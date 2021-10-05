import React from "react";
import { Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
        StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, TextLight,
        FlexHoriztal,
        Pad_h_small, Pad_w_small} from "../styles/styles";

const logo_img = require("../assets/logo_silv.png");

const SignIn = ({navigation}) => {
  return (
    <StyledContainer>
      <StatusBar style="light" />
      <InnerContainer>
        <AppLogo source = {logo_img}/>
        <Pad_h_medium/>
        <Header1>Let's get you signed in</Header1>
        <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>
        <Pad_h_small />
        <FlexHoriztal>
            <StlyedButton 
              onPress={()=>navigation.navigate('UserSignIn')}
              width='45%'
            >
              <TextLight>User</TextLight>
            </StlyedButton><Pad_w_small/>
            <StlyedButton 
              onPress={()=>navigation.navigate('StaffSignIn')}
              width='45%'
            >
              <TextLight>Staff</TextLight>
            </StlyedButton>
        </FlexHoriztal>
      </InnerContainer>
    </StyledContainer>
  );
}

export default SignIn;