import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  TextInputField, StyledInputLabel, RightIcon,
  LeftIcon,
} from '../atoms/Atoms';

import {colors} from '../../styles/styles';
const {background, borderColorDark, primary, secondary, textLink,
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
  const {customerName, customerCity, customerId, orderDate, orderStatus, orderTotal} = order;

  return (
    <View style={{backgroundColor: backgroundLight, borderColor: borderColorDark, borderWidth: 1,  
                  marginBottom: 10, borderRadius: 25, width: '100%'}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text style={{marginLeft: 10}}>productImage</Text>
        <Text style={{marginLeft: 10}}>room #</Text>
        <Text style={{marginLeft: 10, marginRight: 10}}>orderTime</Text>
      </View>
      <Text style={{marginLeft: 25, paddingBottom: 10}}>productName</Text>
    </View>
  );
};