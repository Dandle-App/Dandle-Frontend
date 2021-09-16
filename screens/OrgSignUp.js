import React from "react";
import KeyboardAvoidingWrapper from "../components/organisms/KeyboardAvoidingWrapper";
import { Text, TextInput, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, FlexHoriztal, Pad_h_small,
        Header1_2, InputTextContainer, SignUp, LightContainer, SignUpContainer} from "../styles/styles";


const OrgSignUp = () => {
  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <StatusBar style="light" />
      <SignUpContainer>
        <SignUp>
          <Header1_2>Company Name</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>Company Email</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>Company Phone Number</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>Org Code</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>Password</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
          <Header1_2>Cofirm Password</Header1_2>
          <TextInput style={{backgroundColor: "white", width:300, height:40}}/>
        </SignUp>
        <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>
        <FlexHoriztal>
            <StlyedButton><Text>Capcha</Text></StlyedButton>
            <StlyedButton><Text>Sign Up</Text></StlyedButton>
        </FlexHoriztal>
      </SignUpContainer>
    </StyledContainer>
  </KeyboardAvoidingWrapper>    
  );
}

export default OrgSignUp;