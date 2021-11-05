import styled from 'styled-components/native';
import {colors} from '../../styles/styles';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

// colors
const {background, primary, secondary, textLink,
  textLight, textDark, backgroundLight} = colors;

// Form atoms
export const TextInputField = styled.TextInput`
    background-color: ${backgroundLight};
    borderBottomWidth: 3px;
    borderColor: #d3d3d3;
    padding: 10px;
    paddingTop: 5px;
    marginBottom: 35px;
    color: ${textDark};
`;

// texts
export const StyledInputLabel = styled.Text`
    color: ${primary};
    font-size: 16px;
    padding: 5px;
    padding-bottom: 0px;
    text-align: left;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  padding: 3px;
  color: ${(props) => props.type == 'success' ? 'green' : 'red'};
`;

// buttons and links
export const RightIcon = styled.TouchableOpacity`
    right: 1px;
    width: 35px;
    height: 35px;
    top: 35px;
    position: absolute;
    z-index: 200;
`;
export const TextLink = styled.TouchableOpacity`
    align-items: center;
    color: ${textLink};
    paddingLeft: 5px;
`;

// Views
export const LeftIcon = styled.View`
    z-index: 1;
    position: absolute;
    top: 60%;
    left: 2%;
`;
