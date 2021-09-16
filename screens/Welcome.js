import React from "react";
import { Text, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import { Video, AVPlaybackStatus } from 'expo-av';

import { 
        StyledContainer, InnerContainer, Header1, 
        Header2, Header3, AppLogo, StlyedButton,
        Pad_h_medium, 
        LightContainer} from "../styles/styles";

const logo_img = require("../assets/logo_silv.png");
const logo_img_red = require("../assets/logo_red.png");
const how_it_works = require("../assets/how_it_works.mp4");

const Welcome = ({navigation}) => {
  return (
    <StyledContainer>
      <StatusBar style="light" />
      <Swiper>
        <InnerContainer>
          <AppLogo source = {logo_img}/>
          <Header1>Welcome to Dandle</Header1>
          <Header2>Swipe to see how it works</Header2>
          <Pad_h_medium/><Pad_h_medium/><Pad_h_medium/><Pad_h_medium/>

          <StlyedButton 
            onPress={()=>navigation.navigate('SignIn')}
          >
            <Text>Continue</Text>
          </StlyedButton>

          <Header3>I am an organization/company</Header3>
        </InnerContainer>

        <LightContainer>
          <Pad_h_medium/><Pad_h_medium/>
          <Video 
            source = {how_it_works}
            resizeMode = "cover"
            shouldPlay = {true}
            style = { {width: "100%", height: "45%", zIndex: 2, borderRadius:10} }
            isLooping
          />
          <Pad_h_medium/><Pad_h_medium/>
          <StlyedButton 
            onPress={()=>navigation.navigate('SignIn')}
          >
            <Text>Continue</Text>
          </StlyedButton>
        
          <Header3>I am an organization/company</Header3>
        </LightContainer>
      </Swiper>
    </StyledContainer>
  );
}

export default Welcome;