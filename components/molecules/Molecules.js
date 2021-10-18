import React from 'react';
import {View} from 'react-native';
import {
    TextInputField, StyledInputLabel, RightIcon, 
    LeftIcon
} from '../atoms/Atoms';

import { colors } from '../../styles/styles';
const { background, primary, secondary, textLink, 
    textLight, textDark, backgroundLight } = colors;

import {Octicons} from '@expo/vector-icons';

export const StyldTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
    <View>
        <LeftIcon><Octicons name={icon} color={primary} size={15}px /></LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <TextInputField {...props} />
        {isPassword && <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Octicons name={hidePassword ? "eye":"eye-closed"} color={primary} size={18} />
        </RightIcon>}
    </View>
    );
}