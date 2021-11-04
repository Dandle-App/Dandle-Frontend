import React from 'react';
import {View, Text} from 'react-native';
import {
  TextInputField, StyledInputLabel, RightIcon,
  LeftIcon,
} from '../atoms/Atoms';

import {colors} from '../../styles/styles';
const {background, primary, secondary, textLink,
  textLight, textDark, backgroundLight} = colors;

import {Octicons} from '@expo/vector-icons';

export const StyldTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
    <View>
      <LeftIcon><Octicons name={icon} color={primary} size={15}px /></LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <TextInputField {...props} />
      {isPassword && <RightIcon onPress={() => setHidePassword(!hidePassword)}>
        <Octicons name={hidePassword ? 'eye':'eye-closed'} color={primary} size={18} />
      </RightIcon>}
    </View>
  );
};

export const OrderCard = ({order}) => {
  const {customerName, orderDate, orderStatus, orderTotal} = order;

  return (
    <View style={{backgroundColor: backgroundLight, flexDirection: 'row', borderStyle='solid', borderColor={primary}}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <LeftIcon><Octicons name="package" color={primary} size={15} /></LeftIcon>
        <Text style={{marginLeft: 10}}>{customerName}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <LeftIcon><Octicons name="calendar" color={primary} size={15} /></LeftIcon>
        <Text style={{marginLeft: 10}}>{orderDate}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <LeftIcon><Octicons name="credit-card" color={primary} size={15} /></LeftIcon>
        <Text style={{marginLeft: 10}}>{orderTotal}</Text>
      </View>
    </View>
  );
};
