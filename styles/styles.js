import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { View, Text, Image, TouchableOpacity } from "react-native";

const status_bar_height = Constants.statusBarHeight + 10;
// App colors
export const colors = {
    background: '#630101',
    primary: '#f38484',
    secondary: '#d64547',
    textLink: '#f38484',
    textLight: '#f5f5f5',
    textDark: '#212121',
    backgroundLight: '#f5f5f5',
    borderColorDark: '#9e9e9e'
};
const { background, primary, secondary, textLink, 
        textLight, textDark, backgroundLight } = colors;
        
//container styles
export const StyledContainer = styled.View`
    flex: 1;
    padding-top: ${status_bar_height}px;
    background-color: ${background};
    padding:24px;
`;
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-top: 75%;
`;
export const LightContainer = styled.View`
    flex: 1;
    padding-top: ${status_bar_height}px;
    background-color: ${backgroundLight};
    padding:0px;
`;
export const SignUpContainer = styled.View`
    padding-top: ${status_bar_height}px;
    width: 100%;
    align-items: center;
    padding: 0px;
`;
export const FlexHoriztal = styled.View(
    ({justify}) => `
        flexDirection: row;
        align-items: center;
        justifyContent: ${justify};
    `
);
export const SignUp = styled.View`
    padding-top: ${status_bar_height}px;
`;
export const PadlessContainer = styled.View`
    flex: 1;
    flexGrow: 2;
    width: 100%;
    background-color: ${backgroundLight};
    align-self: center;
    padding: 24px;
    paddingTop:25%;
`;
// Gaps
export const Pad_h_small = styled.View`
    height: 10px;
`;
export const Pad_h_medium = styled.View`
    height: 45px;
`;
export const Pad_w_small = styled.View`
    width: 20px;
`;
// text styles
export const Header1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${primary};
    padding-top: 42px;
`;
export const Header1_2 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${primary};
`;
export const Header2 = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${primary};
    padding-top: 5px;
    padding-bottom: 10px;
`;
export const Header3 = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${primary};
`;
export const TextLight = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${textLight};

`;
export const TextDark = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${TextDark};

`;
//img styles
export const AppLogo = styled.Image`
    width: 66px;
    height: 77px;
`;
export const AppLogoRed = styled.Image`
    width:62px; 
    height:73px
`;
//button styles
export const StlyedButton = styled.TouchableOpacity(
    ({center,justfy,width}) => `
    background-color: ${secondary};
    align-items: center;
    justifyContent: space-around;
    width: ${width}
    height: 50px;
    border-radius: 35px;

`);
export const ScanButton = styled.TouchableOpacity`
    background-color: ${secondary};
    color= ${textLight};
    align-items: center;
    justifyContent: space-around;
    width: 150px;
    height: 50px;
    border-radius: 10px;
`;