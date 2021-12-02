import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
  const {customerName, customerCity, customerId, orderDate, orderStatus, orderTotal, orderItems, orderImage} = order;

  return (
    <View style={{backgroundColor: backgroundLight, borderColor: borderColorDark, borderWidth: 1,  
                  marginBottom: 10, borderRadius: 25, width: '100%'}}>
      <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{orderImage}} style={{width: '33%'}}/>
        <Text style={{width: '33%', fontWeight: 'bold', textAlign: 'center'}}>{orderStatus}</Text>
        <Text style={{width: '33%', textAlign: 'center', color: borderColorDark}}>{orderDate}</Text>
      </View>
      <Text style={{marginLeft: 20, paddingBottom: 10, color: borderColorDark}}>productNmae</Text>
    </View>
  );
};