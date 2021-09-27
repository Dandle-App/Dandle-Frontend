import styled from 'styled-components';
import Constants from 'expo-constants';
import { colors } from '../../styles/styles';
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

//colors
const { background, primary, secondary, textLink, 
    textLight, textDark, backgroundLight } = colors

// Form atoms
export const TextInputField = styled.TextInput`
    background-color: ${backgroundLight};
    borderBottomWidth: 3px;
    borderColor: #d3d3d3;
    padding: 10px;
    marginBottom: 20px;
    color: ${textDark};
`;

//texts
export const StyledInputLabel = styled.Text`
    color: ${primary};
    font-size: 16px;
    padding: 5px;
    text-align: left;
`;

//buttons and links
export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    position: absolute;
    top: 10px;
    z-index: 1;
`;
export const TextLink = styled.TouchableOpacity`
    align-items: center;
    color: ${textLink};
    paddingLeft: 5px;
`;

//Views
export const LeftIcon = styled.View`
    z-index: 1;
    position: absolute;
    top: 60%;
    left: 2%;
`;
