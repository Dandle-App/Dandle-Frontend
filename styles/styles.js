import styled from "styled-components";
import Constants from 'expo-constants';
import { View, Text, Image } from "react-native";

const status_bar_height = Constants.statusBarHeight + 10;
// App colors
export const colors = {
    background: '#ffffff',
    primary: '#00bcd4',
    secondary: '#ff9800',
    text: '#212121',
    textLight: '#757575',
    textDark: '#212121',
};
const { background, primary, secondary, text, 
        textLight, textDark } = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding-top: ${status_bar_height}px;
    background-color: ${background};
    padding:25px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-top: ${status_bar_height}px;
`;

export const Header1 = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`;
export const AppLogo = styled.Image`
    width: 100px;
    height: 100px;
`;

<img src='../assets/im.png'/>