import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  TextInputField, StyledInputLabel, RightIcon,
  LeftIcon,
} from '../atoms/Atoms';

import {colors} from '../../styles/styles';
const {background, borderColorDark, primary, secondary, textLink,
  textLight, textDark, backgroundLight, bgWhite, textGrayLight} = colors;

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
    <View style={{backgroundColor: bgWhite, borderColor: borderColorDark, borderWidth: 1,  
            marginBottom: 30, borderRadius: 25, width: '100%'}}>

      <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <Image
          source={{uri:"https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg"}}
          style={{width: '33%', aspectRatio: 1, borderRadius:6}}/>

        <Text style={{width:'33%', fontWeight:'bold', textAlign:'center',
            fontSize:18, fontFamily:'Roboto'}}>
          {orderStatus}
        </Text>
        <Text style={{width: '33%', textAlign: 'right', fontSize: 12, fontWeight: 'bold',
            color: textGrayLight}}>
          {orderDate}
        </Text>
      </View>
      <Text style={{marginLeft: 20, paddingBottom: 10, fontSize: 13,
        color: textGrayLight, fontWeight:'bold'}}>{customerName}</Text>
    </View>
  );
};