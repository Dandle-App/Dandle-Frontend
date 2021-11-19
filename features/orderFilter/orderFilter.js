import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { OrderProgressTab } from '../../components/molecules/Molecules';
import { colors, TextLight } from '../../styles/styles';

const {background, primary, textLight, textDark} = colors;

export const OrderFilter = ({
    onPressTab,
    tabs,
    style,
    ...props
}) => {
    
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);
    const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
    
    function handleTabPress(index) {
        setActiveTabIndex(index);
        setSelectedTab(index);
    }
    return (
        <View style={{flexDirection: 'row', width:'90%'}}>
          {tabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  height: 25,
                  backgroundColor: selectedTab === index ? primary : 'transparent',
                  borderWidth: selectedTab === index ? 0 : 1,
                  borderColor: '#ccc',
                  marginRight: 5, marginLeft: 5,
                }}
                onPress={() => handleTabPress(index)}
              >
                <Text style={{color: selectedTab === index ? textLight : textDark}}>{tab}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}