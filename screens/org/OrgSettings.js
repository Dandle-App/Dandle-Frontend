import * as React from 'react';
import { Text, View } from 'react-native';
import { StlyedButton, Pad_h_medium, TextLight } from '../../styles/styles';
import { deleteToken } from '../../features/user/User';
import { TextLink } from '../../components/atoms/Atoms';
import * as Updates from "expo-updates";
import { useSelector } from 'react-redux';
import { selectOrders } from '../../features/orders/orderSlice';

export default function OrgSettings({navigation}) {
  let [message, setMessage] = React.useState('');
  function handleLogout() {
    deleteToken();
    Updates.reloadAsync();
  }
  const orders = useSelector(state => state.order);

  function test() {
    console.log('test');
    console.log(orders);
  }

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Pad_h_medium />
      <Text>{message}</Text>
      <StlyedButton width='50%'onPress={() => handleLogout() }>
        <TextLight>Logout</TextLight>
      </StlyedButton>

      <Pad_h_medium/>
      <TextLink onPress={() => test()}>
        <Text>Orders</Text>
      </TextLink>
      
    </View>
  );
}