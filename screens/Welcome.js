import React from "react";
import { Text } from "react-native";
import { StyledContainer, InnerContainer, Header1,
        AppLogo } from "../styles/styles";

const logo_img = require("../assets/logo.png");

const Welcome = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <AppLogo source = {logo_img}/>
        <Text>Welcome to Dandle</Text>
        <Text>Tell your hospital what you need</Text>
      </InnerContainer>
    </StyledContainer>
  );
}

export default Welcome;