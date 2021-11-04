import * as React from 'react';
import { Text, View } from 'react-native';
import { StlyedButton, Pad_h_medium, TextLight } from '../../styles/styles';
import { deleteToken } from '../../features/user/User';
import { TextLink } from '../../components/atoms/Atoms';

export default function OrgSettings({navigation}) {
    let [message, setMessage] = React.useState('');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Pad_h_medium />
        <Text>{message}</Text>
        <StlyedButton width='50%'onPress={() => deleteToken() }>
          <TextLight>Logout</TextLight>
        </StlyedButton>
        
      </View>
    );
}