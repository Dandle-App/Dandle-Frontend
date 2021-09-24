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

export const StyldTextInput = ({label, icon, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} color={primary} size={15}px />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <TextInputField {...props} />
    </View>
    );
}